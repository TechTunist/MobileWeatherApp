import React, { useEffect, useState } from "react";
import { Button, StyleSheet, View, Text, ImageBackground, TextInput, Image } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { styles } from './Styles';
import * as Location from 'expo-location';

export function MapScreen({navigation}) {

  const [location, setLocation] = useState();

      // useEffect is a hook that runs after the component is rendered
      useEffect(() => {
        (async() => {
        let {status} = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission denied');
            alert(errorMsg);
            return;
        }

        let loc = await Location.getCurrentPositionAsync({});
        setLocation({
          latitude: loc.coords.latitude,
          longitude: loc.coords.longitude,
          // latitude: 23.259933,
          // longitude: 77.412613,
          latitudeDelta: 0.009,
          longitudeDelta: 0.009,
        });

  
        })();
    }, []);


    return (

      <MapView
        style={StyleSheet.absoluteFillObject}
        provider={PROVIDER_GOOGLE}
        mapType='hybrid'
        region={location}
        >
          <Marker coordinate={{ latitude: 23.259933, longitude: 77.412613 }}/>
      </MapView>

    )
  }