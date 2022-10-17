import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import MapView, {Marker,Callout} from 'react-native-maps';
import * as Location from 'expo-location';


export default function App() {
  const [gym, setGym] = useState(null)
  const [coffee, setCoffee] = useState(null)
  const [dorm, setDorm] = useState(null)

  useEffect(()=>{
    (async()=>{
      let gym = await Location.geocodeAsync("5006 S Rogers St, Bloomington, IN 47403")
      setGym(gym)
      // console.log(gym)

      let coffee = await Location.geocodeAsync("1400 E 3rd St, Bloomington, IN 47401")
      setCoffee(coffee)
      // console.log(coffee)

      let dorm = await Location.geocodeAsync("501 N Sunrise Dr #7506, Bloomington, IN 47406")
      setDorm(dorm)
      // console.log(dorm)
    })()
  },[])

  return (
    <View style={styles.container}>
      <MapView 
        style={styles.map}
        initialRegion={{
          latitude: 39.1653,
          longitude: -86.5264,
          latitudeDelta: 0.125,
          longitudeDelta: 0.125
        }}
      >
      <Marker
        // coordinate={{latitude: gym[0].latitude, longitude: gym[0].longitude}}
        coordinate={{latitude: 39.1112727, longitude: -86.5200349}}
        title="Gym">
      </Marker>
      <Marker
        // coordinate={{latitude: coffee[0].latitude, longitude: coffee[0].longitude}}
        coordinate={{latitude: 39.1639056, longitude: -86.5160195}}
        title="Coffee">
      </Marker>
      <Marker
        // coordinate={{latitude: dorm[0].latitude, longitude: dorm[0].longitude}}
        coordinate={{latitude: 39.1700731, longitude: -86.5126572}}
        title="Dorm">
        </Marker>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },map:{
    height: '100%',
    width: '100%'
  }
});
