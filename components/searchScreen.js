import React, { useState, useCallback } from "react";
import { Button, View, ImageBackground, ActivityIndicator, TextInput } from 'react-native';
import { styles } from './Styles';
import MainData from './MainData'
import WeatherScroll from './WeatherScroll'
import axios from 'axios';


export function SearchScreen({navigation}) {

    const [location, setLocation] = useState(null);
    const [input, setInput] = useState("");
    const [localTime, setLocalTime] = useState();

    const api = 'b07ce6c8a93a606ff7222b11ce82d280';

    const fetchDataHandler = useCallback(() => {
      setInput('');
      axios({
      method: 'GET',
      url: `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${api}`
      })
      .then(res => {

      fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${res.data.coord.lat}&lon=${res.data.coord.lon}&units=metric&exclude=hourly,minutely&appid=${api}`,
        {
            method: 'POST',
            headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
            }
        })
        .then((response) => response.json())
        .then((json) => {
          // console.log(json.list[0].dt - json.city.timezone);
          setLocalTime((json.list[0].dt - (Math.abs(json.city.timezone))));
          var locTime = new Date(localTime * 1000);
          console.log(locTime.toLocaleTimeString("en-US"));
          // console.log(json.city.timezone);
          console.log(json);
          // set current location forecast
          setLocation(json);

        })
        .catch((error) => {
            console.log(error);
        });
      })
      .catch(e => console.dir(e))

      
  }, [input, api]);


if (!location) {
  return (
  <View style={styles.container}>
      <ImageBackground
      source={require('../assets/Android-rain.jpg')}
      resizeMode="cover"
      style={styles.image}>
      <View style={{marginTop: '50%'}}>
      </View>
      <TextInput
            placeholder='Enter location'
            onChangeText={text => setInput(text)}
            value={input}
            placeholderTextColor={'#000'}
            style={styles.textInput}
            onSubmitEditing={fetchDataHandler}
            />
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
      <TextInput
        placeholder='Enter location'
        onChangeText={text => setInput(text)}
        value={input}
        placeholderTextColor={'#000'}
        style={styles.textInput}
        onSubmitEditing={fetchDataHandler}
      />
      </ImageBackground>
  </View>
  );
}
}
