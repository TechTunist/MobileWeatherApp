import React, {useEffect, useState} from 'react'
import {View, Text, Image} from 'react-native';
import { styles } from './Styles';


const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


const WeatherItem = ({title, value, unit}) => {
    return(
        <View style={styles.weatherItem}>
            <Text style={styles.weatherItemTitle}>{title}</Text>
            <Text style={styles.weatherItemTitle}>{value}{unit}</Text>            
        </View>
    )
}

const MainData = ({current, timezone}) => {
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')

    useEffect (() => {
        setInterval(() => {
            const time = new Date();
            const month = time.getMonth();
            const date = time.getDate();
            const day = time.getDay();
            const hour = time.getHours();
            const hoursIn12HrFormat = hour >= 13 ? hour %12: hour
            const minutes = time.getMinutes();
            const ampm = hour >=12 ? 'pm' : 'am'
        
            setTime((hoursIn12HrFormat) + ':' + (minutes < 10? '0'+minutes: minutes) +ampm) 
        
            setDate(days[day] + ', ' + date+ ' ' + months[month]) 
        
        }, 1000);
    }, [])
    return (
        <View style={styles.mainDataContainer}>  

           <View style={{flexDirection: 'row'}}>
               <View>
                   <Text style={styles.heading}>{time}</Text>
                   <Text style={styles.subheading}>{date}</Text>
               </View>
               <View style={styles.description}>
                <Image
                    source={{
                        uri:`http://openweathermap.org/img/wn/${current?.list[0].weather[0]?.icon}@4x.png`
                    }} 
                    style={{width: 120, height: 80, justifyContent:'center'}}
                    />
                <Text style={styles.humidText}>
                    {`${current?.list[0].weather[0]?.description}`}
                </Text>
               </View>
               
           </View>

           <View style={styles.weatherItemContainer}>
                <Text style={styles.locationText}>{`${current?.city.name}, ${current?.city?.country}`}</Text>
                <WeatherItem title="Temp    " value={current? current.list[0].main.temp : ""} unit=" °C"/>
                <WeatherItem title="Feels Like    " value={current? current.list[0].main.feels_like : ""} unit=" °C"/>
                <WeatherItem title="Humidity    " value={current? current.list[0].main.humidity : ""} unit=" %"/>
                <WeatherItem title="Pressure    " value={current? current.list[0].main.pressure : ""} unit=" hPA"/>
                <WeatherItem title="Wind    " value={current? Math.round(current.list[0].wind.speed) : ""} unit=" mph"/>
                <WeatherItem title="Gust    " value={current? Math.round(current.list[0].wind.gust) : ""} unit=" mph"/>
            </View>

        </View>
    )
}


export default MainData