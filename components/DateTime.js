import React, {useEffect, useState} from 'react'
import {View, Text, StyleSheet} from 'react-native';
// import moment from 'moment-timezone'
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

const DateTime = ({current, timezone}) => {
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
        <View style={styles.dateTimeContainer}>  
           <View>
               <View>
                   <Text style={styles.heading}>{time}</Text>
               </View>
               <View>
                   <Text style={styles.subheading}>{date}</Text>
               </View>
               <View style={styles.weatherItemContainer}>
                    <WeatherItem title="Temp    " value={current? current.temp : ""} unit=" °C"/>
                    <WeatherItem title="Humidity    " value={current? current.humidity : ""} unit=" %"/>
                    <WeatherItem title="Pressure    " value={current? current.pressure : ""} unit=" hPA"/>
               </View>
           </View>
           <View style={styles.rightAlign}>
               <Text style={styles.timezone}>{timezone}</Text>
               
           </View>
        </View>
    )
}


export default DateTime