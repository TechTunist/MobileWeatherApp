import React, { useState, useCallback, useEffect } from "react";
import { Button, StyleSheet, View, Text, ImageBackground, Image, ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';
import { styles } from './Styles';
import DateTime from './DateTime'
import WeatherScroll from './WeatherScroll'


export function Home({navigation}) {

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [data, setData] = useState([]);
    const [humidity, setHumidity] = useState("");
    const [description, setDescription] = useState("");
    const [icon, setIcon] = useState();
    const [locationList, setLocationList] = useState();

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
        fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${loc.coords.latitude}&lon=${loc.coords.longitude}&units=metric&exclude=hourly,minutely&appid=b07ce6c8a93a606ff7222b11ce82d280`,
        {
            method: 'POST',
            headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
            }
        })
        .then((response) => response.json())
        .then((json) => {
          console.log(json.list[0]);
          // console.log(json.list);
          // set current location forecast
          setLocation(json);
          setLocationList(json.list);
          // setData(json);
          // setHumidity(json.main.humidity);
          // setDescription(json.weather[0].description);
          // setIcon(json.weather[0].icon);
            
            
        })
        .catch((error) => {
            console.log(error);
        });
        })();
    }, []);

    if (data == null) {
        return (
        <View style={styles.container}>
            <ImageBackground
            source={require('../assets/Android-rain.jpg')}
            resizeMode="cover"
            style={styles.image}>
            <View>
            <ActivityIndicator
                size={'large'}
                color={'black'}
            />
            </View>
            <View style={styles.infoView}>
                
                <Text style={styles.dateText}>
                {new Date().toLocaleDateString()}
                </Text>
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

            <Text style={styles.locationText}>{`${location?.city.name}, ${location?.city?.country}`}</Text>
            <DateTime current={location?.list[0]?.main} timezone={location?.list[0]?.main?.timezone}/>
            
            
            {data && (
            <View style={styles.infoView}>
                <Image
                  source={{
                    uri:`http://openweathermap.org/img/wn/${location?.list[0]?.weather[0]?.icon}@4x.png`
                  }} 
                  style={{width: 120, height: 100}}
                />
                <Text style={styles.humidText}>
                  {`${location?.list[0]?.weather[0]?.description}`}
                </Text>

                <WeatherScroll weatherData={location?.list}/>
            </View>
            )}
            <Button
              title='Button to next screen'
              onPress={() => navigation.navigate('Search')}
              style={styles.button}
            />
            </ImageBackground>
        </View>
        );
    }
}
