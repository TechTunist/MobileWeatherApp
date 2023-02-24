import React, { useState, useCallback } from "react";
import { Button, StyleSheet, View, Text, ImageBackground, TextInput, Image, ActivityIndicator, FlatList } from 'react-native';
import axios from 'axios';
import { styles } from './Styles';

import { ScrollView } from 'react-native-gesture-handler';

export function SearchScreen({navigation}) {


    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);

    const api = 'b07ce6c8a93a606ff7222b11ce82d280';

    const fetchDataHandler = useCallback(() => {
        setLoading(true);
        setInput('');
        axios({
        method: 'GET',
        url: `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${api}`
        })
        .then(res => {
        // console.log("res.data********", res.data);
        setData(res.data);        
        })
        .catch(e => console.dir(e))
        .finally(() => setLoading(false));
    }, [input, api]);


    if (data === null) {
        return (
        <View style={styles.container}>
            <ImageBackground
            source={require('../assets/Android-rain.jpg')}
            resizeMode="cover"
            style={styles.image}>
            <TextInput
            placeholder='Enter location'
            onChangeText={text => setInput(text)}
            value={input}
            placeholderTextColor={'#000'}
            style={styles.textInput}
            onSubmitEditing={fetchDataHandler}
            />
            {loading && (
            <View>
            <ActivityIndicator
                size={'large'}
                color={'black'}
            />
            </View>
            )}
            <View style={styles.infoView}>
                <Text style={styles.dateText}>
                {new Date().toLocaleDateString()}
                </Text>
            </View>
            <Button
              title='Button to next screen'
              onPress={() => navigation.navigate('MapScreen')}
              style={styles.button}/>
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
            style={styles.image}>
            <TextInput
            placeholder='Enter location'
            onChangeText={text => setInput(text)}
            value={input}
            placeholderTextColor={'#000'}
            style={styles.textInput}
            onSubmitEditing={fetchDataHandler}
            />
            {loading && (
            <View>
            <ActivityIndicator
                size={'large'}
                color={'black'}
            />
            </View>
            )}
            {data && (
            <View style={styles.infoView}>
              <Text style={styles.locationText}>
                {`${data?.name}, ${data?.sys?.country}`}
              </Text>
              <Text style={styles.tempText}>
                {`${Math.round((data?.main?.temp - 273.15) * 10) / 10}°C`}
              </Text>
              <Text style={styles.humidText}>
                {`${data.weather[0].description}`}
              </Text>
              <Text style={styles.humidText}>
                {`Humidity: ${data.main.humidity}%`}
              </Text>
              <Image
                  source={{
                      uri:`http://openweathermap.org/img/wn/${data?.weather[0]?.icon}@4x.png`
                  }} 
                  style={{width: 100, height: 50}}
              />
              <Text style={styles.dateText}>
                {new Date().toLocaleDateString()}
              </Text>
            </View>
            )}
            <Button
              title='Button to next screen'
              onPress={() => navigation.navigate('MapScreen')}
              style={styles.button}/>
            </ImageBackground>
        </View>
        );
    }
}
