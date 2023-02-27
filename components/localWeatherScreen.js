import React, { useState, useEffect } from "react";
import { Button, View, ImageBackground, ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';
import { styles } from './Styles';
import MainData from './MainData'
import WeatherScroll from './WeatherScroll'


export function Home({navigation}) {

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    const api = 'b07ce6c8a93a606ff7222b11ce82d280';

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

        // fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${loc.coords.latitude}&lon=${loc.coords.longitude}&appid=b07ce6c8a93a606ff7222b11ce82d280`,
        fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${loc.coords.latitude}&lon=${loc.coords.longitude}&units=metric&exclude=hourly,minutely&appid=${api}`,
        {
            method: 'POST',
            headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
            }
        })
        .then((response) => response.json())
        .then((json) => {

          // set current location forecast
          setLocation(json);            
            
        })
        .catch((error) => {
            console.log(error);
        });
        })();
    }, []);

    if (!location) {
        return (
        <View style={styles.container}>
            <ImageBackground
            source={require('../assets/Android-rain.jpg')}
            resizeMode="cover"
            style={styles.image}>
            <View style={{marginTop: '50%'}}>
            <ActivityIndicator
                size={'large'}
                color={'black'}
            />
            </View>
            </ImageBackground>
        </View>
        );
    }
    else {
        return (
        <View style={styles.container}>
            <ImageBackground
              source={require('../assets/Android-rain.jpg')}
              resizeMode="cover"
              style={styles.image}
            >

            <MainData current={location} timezone={location?.list[0]?.main?.timezone}/>

            {location && (
            <View style={styles.infoView}>
                <WeatherScroll weatherData={location?.list}/>
            </View>
            )}
            <View style={styles.buttonView}>
            <Button
                title='SEARCH SCREEN'
                onPress={() => navigation.navigate('Search')}
            />
            </View>
            </ImageBackground>
        </View>
        );
    }
}
