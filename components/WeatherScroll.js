import React from 'react'
import { ScrollView } from 'react-native';
import FutureForecast from './FutureForecast';
import { styles } from './Styles';


const WeatherScroll = ({weatherData}) => {
  return (
    <ScrollView horizontal={true} style={styles.scrollView}>
        <FutureForecast data={weatherData}/>
    </ScrollView>
  )
}

export default WeatherScroll