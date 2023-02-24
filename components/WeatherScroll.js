import React from 'react'
import { View, ScrollView, Text, Image, StyleSheet } from 'react-native';
import FutureForecast from './FutureForecast'


const WeatherScroll = ({weatherData}) => {
  return (
    <ScrollView horizontal={true} style={styles.scrollView}>
        {/* <CurrentTemperatureEl data={weatherData && weatherData.length > 0 ? weatherData[0] : {}}/> */}
        <FutureForecast data={weatherData}/>
    </ScrollView>
  )
}

// const CurrentTemperatureEl = ({data}) => {

//     if(data){
//         return (
//             <View style={styles.currentTempContainer}>
//                 <Image
//                   source={{
//                     uri:`http://openweathermap.org/img/wn/${data[0]?.weather?.icon}@4x.png`
//                   }} 
//                   style={{width: 150, height: 100}}
//                 />
//                 <View >
//                     <Text style={styles.temp}>Whitstatble</Text>
//                     <Text style={styles.temp}>26 Degrees</Text>
//                     <Text style={styles.temp}>16/04/23</Text>
//                 </View>
//             </View>
//         )
//     }else {
//         return (
//             <View>
//                 <Image />
//                 <View >
//                     <Text style={styles.temp}>Whit</Text>
//                     <Text style={styles.temp}>26 Degrees</Text>
//                     <Text style={styles.temp}>16/04/23</Text>
//                 </View>
//             </View>
//         )
//     }
// }

const styles = StyleSheet.create({
    scrollView: {
        // flex:0.4,
        backgroundColor: '#18181baa',
        // padding:30,
        height: 10
    },

})

export default WeatherScroll