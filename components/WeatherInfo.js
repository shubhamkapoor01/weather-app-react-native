import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function WeatherInfo({currWeather}) {
	const {main: {temp},} = currWeather;

	return (
		<View style={Styles.weatherInfo}>
			<Text>{temp}</Text>
		</View>
	);
}

const Styles = StyleSheet.create({
	weatherInfo: {
		alignItems: 'center',
	}
})