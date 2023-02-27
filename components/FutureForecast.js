import React from 'react'
import {View, Text, Image} from 'react-native'
import { styles } from './Styles';


const FutureForecast = ({data}) => {
    return (
        <View style={{flexDirection: 'row'}}>
            {
                data && data.length > 0 ? 
                data.map((data, idx) => (
                    idx !== 0 &&  <FutureForecastItem key={idx} forecastItem={data}/>
                ))
                :
                <View/>
            }
        </View>
    )
}

const FutureForecastItem = ({forecastItem}) => {
    const img = {uri: "http://openweathermap.org/img/wn/"+forecastItem.weather[0].icon+"@2x.png"}

    return (
        <View  style={styles.forecastContainer}>
            <View style={styles.forecastImageContainer}>
                <Image source={img} style={styles.imageForecast} />
            </View>
            <Text  style={styles.forecastTemp}>{forecastItem.weather[0].description}</Text>
            <Text  style={styles.forecastTemp}> {forecastItem.main.temp_max}°C</Text>
            <Text  style={styles.forecastTemp}>{forecastItem.dt_txt.slice(10, 16)}</Text>
            <Text  style={styles.forecastDate}>{forecastItem.dt_txt.slice(0, 10)}</Text>
            
        </View>
    )
}

export default FutureForecast