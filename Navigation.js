import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from "./Home.js";

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator> screenOptions={{headerShown: false}}>
            </Stack.Navigator>
        </NavigationContainer>
    );
};