import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import WeatherInfo from './components/WeatherInfo';
import * as Location from 'expo-location';
import UnitsPicker from './components/UnitsPicker';
import ReloadIcon from './components/ReloadIcon';
import WeatherDetails from './components/WeatherDetails';
import {colors} from './utils/index';
import { WEATHER_API_KEY } from '@env';

const BASE_WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather?"

export default function App() {
  const [errorMsg, setErrorMsg] = useState(null);
  const [currWeather, setCurrWeather] = useState(null);
  const [unitsSystem, setUnitsSystem] = useState('metric');

  useEffect(() => {
    load();
  }, [unitsSystem])

  async function load() {
    setCurrWeather(null);
    setErrorMsg(null);

    try {
      let { status } = await Location.requestBackgroundPermissionsAsync();
      if (status !== 'granted') {
        return;
      }
      const location = await Location.getCurrentPositionAsync();
      const {latitude, longitude} = location.coords;
      const weatherUrl = `${BASE_WEATHER_URL}lat=${latitude}&lon=${longitude}&units=${unitsSystem}&appid=${WEATHER_API_KEY}`;
      const response = await fetch(weatherUrl);
      const result = await response.json();
      
      if (response.ok) {
        setCurrWeather(result);
      } else {
        setErrorMsg("Error fetching weather data!");
      }

    } catch (error) {
      setErrorMsg("Access to location not granted!");
    }
  }

  if (currWeather) {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.main} >
          <UnitsPicker unisSystem={unitsSystem} setUnitsSystem={setUnitsSystem} />
          <ReloadIcon load={load} />
          <WeatherInfo currWeather={currWeather} />
        </View>
        <WeatherDetails currWeather={currWeather} />
      </View>
    );
  } else if (errorMsg) {
    return (
      <View style={styles.container}>
        <Text>{errorMsg}</Text>
        <StatusBar style="auto" />
      </View> 
    );
  } else {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={colors.PRIMARY_COLOR} />
        <StatusBar style="auto" />
      </View> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  main: {
    flex: 1,
    justifyContent: 'center',
  },
});