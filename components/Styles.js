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
    padding: 5,    
    paddingVertical: 13,
    marginVertical: '10%',
    marginRight: 'auto', 
    backgroundColor: '#fff',
    fontsize: 22,
    borderRadius: 16,
    position: 'absolute',
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
    paddingLeft: 10
  },
  dateText: {
    color: '#fff',
    fontSize: 22,
  },
  humidText: {
      color: '#fff',
      fontSize: 25,
      // marginVertical: 10,
    },
  tempText: {
    fontSize: 35,
    color: '#fff',
    
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  dateTimeContainer: {
    // flex:1.5,
    flexDirection:"row",
    justifyContent:'space-between',
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
rightAlign: {
    textAlign:'right',
    marginTop: 20
},
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
    fontSize: 24,
    fontWeight: '100'
}
})

export { styles }