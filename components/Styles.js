import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
  },
  image: {
    flex: 1,
    flexDirection: 'column',
  },
  textInput: {
    width: '100%',
    padding: 13,
    marginBottom: 10,
    backgroundColor: '#fff',
    fontsize: 22,
    borderRadius: 16,
    position: 'absolute',
    bottom: 0
  },
  infoView: {
    flex: 1,
    alignItems: 'center',
    textAlign: 'center',
    // marginTop: '40%'
  },
  locationText: {
    color: '#fff',
    fontSize: 30,
    paddingLeft: 10,
    paddingBottom: 10,
    textAlign: 'center'
  },
  dateText: {
    color: '#fff',
    fontSize: 22,
  },
  humidText: {
      color: '#fff',
      fontSize: 15,
      // marginVertical: 10,
    },
  tempText: {
    fontSize: 35,
    color: '#fff',
    
  },
  buttonView: {
    width: '100%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainDataContainer: {
    // flex:1.5,
    // flexDirection:"row",
    // justifyContent:'space-between',
    padding: 15
},
heading: {
    fontSize: 45,
    color:'white',
    fontWeight: '100'
},
subheading: {
    fontSize: 25,
    color: '#eee',
    fontWeight: '300'
},
// rightAlign: {
//     textAlign:'right',
//     marginTop: 20
// },
timezone: {
    fontSize: 20,
    color:'white'
},
weatherItemContainer: {
    backgroundColor: "#18181b99",
    borderRadius: 10,
    padding: 10,
    marginTop: 30,    
}, 
weatherItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
},
weatherItemTitle: {
    color:'#eee',
    fontSize: 20,
    fontWeight: '100'
},
description: {
  borderRadius: 10,
  paddingLeft: 25,
},
forecastDescription: {
  // flex: 1,
  flexDirection: 'row',
},
imageForecast: {
  width: 50,
  height: 50,        
}, 
forecastContainer: {
  flex:1,
  justifyContent: 'center',
  backgroundColor: '#00000033',
  borderRadius:10,
  borderColor:"#eee",
  borderWidth:1,
  padding: 20,
  marginLeft: 10,
  height: '100%'
},    
forecastTemp: {
  fontSize: 20,
  color:"white",
  fontWeight:"100",
  textAlign:"center",
},
forecastImageContainer: {
  alignItems: 'center', 
  justifyContent: 'center'
},
forecastDate: {
  fontSize: 16,
  color:"white",
  fontWeight:"100",
  textAlign:"center",
  marginBottom: 10
}
})

export { styles }