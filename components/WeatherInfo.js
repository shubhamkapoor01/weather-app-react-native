import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { colors } from '../utils/index';

export default function WeatherInfo({currWeather}) {
	const {
		main: {temp},
		weather: [details],
		name
	} = currWeather;
	const {icon, main, description} = details
	const iconUrl = `https://openweathermap.org/img/wn${icon}@4x.png`;

	return (
		<View style={styles.weatherInfo} >
			<Text>{name}</Text>
			<Image style={styles.weatherIcon} source={{uri: iconUrl}} />
			<Text style={styles.textPrimary}>{temp}</Text>
			<Text style={styles.weatherDescription}>{description}</Text>
			<Text style={styles.textSecondary}>{main}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	weatherInfo: {
		alignItems: 'center',
		color: colors.BORDER_COLOR,
	},
	weatherIcon: {
		width: 100,
		height: 100,
	},
	weatherDescription: {
		textTransform: 'capitalize',
	},
	textPrimary: {
		fontSize: 40,
		color: colors.PRIMARY_COLOR,
	},
	textSecondary: {
		fontSize: 25,
		color: colors.SECONDARY_COLOR,
	}
})