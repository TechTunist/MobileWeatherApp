import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from './components/localWeatherScreen';
import { SearchScreen } from './components/searchScreen';

// import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const Stack = createStackNavigator();


export default function App() {
  
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Local Weather' component={Home}/>
        <Stack.Screen name='Search' component={SearchScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}