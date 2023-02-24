import React, { useState, useCallback, useEffect } from "react";
import { Button, StyleSheet, View, Text, ImageBackground, TextInput, Image, ActivityIndicator, ScrollView, FlatList } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from './components/localWeatherScreen';
import { MapScreen } from './components/mapScreen';
import { SearchScreen } from './components/searchWeatherScreen';

// import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const Stack = createStackNavigator();


export default function App() {
  
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Local Weather' component={Home}/>
        <Stack.Screen name='Search' component={SearchScreen}/>
        <Stack.Screen name='MapScreen' component={MapScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}