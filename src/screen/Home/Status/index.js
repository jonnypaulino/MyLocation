import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import NetInfo from '@react-native-community/netinfo';
import color from '../../../style/colors';

const checkInternetConnection = async () => {
  const state = await NetInfo.fetch();
  if (state.isConnected) {
    return true;
  } else {
    return false;
  }
};

const Status = () => {
  return (
    <View style={styles.row}>
      <Ionicons name="compass" size={64} color={color.primary} />

      <View style={styles.columnCenter}>
        <Text style={styles.title}>My GPS - Tracking</Text>
       
          <Text style={[styles.conectionText, {color: `${checkInternetConnection() ? color.secondary : color.red}`}]}>{checkInternetConnection() ? "Online" : "offline"}</Text>
     
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: color.gray,
    fontSize: 20,
    fontWeight: '700',
  },
  conectionText: {
    fontSize: 16,
    fontWeight: '500',
  },
  columnCenter: {
    marginLeft: 8,
    justifyContent: 'center',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    padding: 32
  },
});
export default Status;
