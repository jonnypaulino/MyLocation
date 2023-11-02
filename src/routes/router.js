import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screen/Home';
import StatusScreen from '../screen/Status';

const Stack = createStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false,
            }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Status" component={StatusScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Router;
