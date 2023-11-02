
import { useEffect, useState } from 'react';

import * as Location from 'expo-location';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';
import { PointsRequest } from '../service/sdk/requests';
import http from '../service/api';
import { generateRandomString } from '../service/funciotion';


export const StateAplication = () => {
  const [time, setTime] = useState(10);
  const [ative, setAtive] = useState(true)
  const [location, setLocation] = useState([]);
  const [locationoff, setLocationoff] = useState([]);


    // Função para verificar a conexão à internet

  const checkInternetConnection = async () => {
    const state = await NetInfo.fetch();
    if (state.isConnected) {
      return true;
    } else {
      return false;
    }
  };


    // Função para sincronizar os dados offline com o servidor

  const handleSincron = async () => {
    const jsonValue = await AsyncStorage.getItem('locationDataOff');
    if (jsonValue != null) {
      const array = JSON.parse(jsonValue);
      PointsRequest(array)
      await AsyncStorage.removeItem("locationDataOff")
    }
  }


  // Função para adicionar um objeto de localização a um array no AsyncStorage

  const addObjectToArray = async (key, location, set) => {
    const jsonValue = await AsyncStorage.getItem(key);
    const isConnected = await checkInternetConnection();
    const date = new Date(location?.timestamp)
    const body = {
      id: generateRandomString(10),
      latitude: location?.coords?.latitude,
      longitude: location?.coords?.longitude,
      speed: location?.coords?.speed,
      time: date.toString()
    }
    const array = jsonValue ? JSON.parse(jsonValue) : []
    const updatedArray = [...array, body];

    set(updatedArray)

    try {
      await AsyncStorage.removeItem(key)
      await AsyncStorage.setItem(key, JSON.stringify(updatedArray));
      if (isConnected) {
        PointsRequest([body])
      }
    } catch (error) {
      console.error('Erro ao adicionar objeto:', error);
    }


  };


  // Pegar localização

  const getLocationAsync = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    const isConnected = await checkInternetConnection();

    if (status === 'granted') {
      const location = await Location.getCurrentPositionAsync({});

      try {


        if (isConnected) {
          handleSincron();
          addObjectToArray("locationData", location, setLocation);
        } else {
          addObjectToArray("locationDataOff", location, setLocationoff);
        }
      } catch (error) {
        console.error('Erro ao armazenar ou sincronizar a localização:', error);
      }
    } else {
      // Handle no caso de permissão negada
    }
  };

  useEffect(() => {
    
    if (ative) {
      getLocationAsync();

      const intervalId = setInterval(() => {
        getLocationAsync();
      }, time * 1000);
      return () => clearInterval(intervalId);
    }

  }, [time, ative]);



  return {
    ative, setAtive, time, setTime, location, locationoff
  }
}