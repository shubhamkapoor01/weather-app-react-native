import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { colors } from '../utils/index';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

const { PRIMARY_COLOR, SECONDARY_COLOR, BORDER_COLOR } = colors;

export default function WeatherDetails({currWeather}) {
	const {
		main: {feels_like, humidity},
	} = currWeather

	return (
		<View style={styles.WeatherDetails}>
			<View style={styles.WeatherDetailsRow}>
				<View style={styles.WeatherDetailsBox}>
					<View style={styles.WeatherDetailsRow} >
						<FontAwesome5 name="temperature-high" size={24} color={PRIMARY_COLOR} />
						<View style={styles.WeatherDetailsBox}>
							<Text>Feels Like:</Text>
							<Text>{feels_like}</Text>
						</View>
					</View>
				</View>
				<View style={styles.WeatherDetailsBox}>
					<View style={styles.WeatherDetailsRow} >
						<MaterialCommunityIcons name="water" size={30} color={PRIMARY_COLOR} />
						<View style={styles.WeatherDetailsBox}>
							<Text>Humidity:</Text>
							<Text>{humidity}</Text>
						</View>
					</View>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	WeatherDetails: {
		marginTop: 'auto',
		borderWidth: 1,
		margin: 15,
		borderColor: BORDER_COLOR,
		borderRadius: 10,
	},
	WeatherDetailsRow: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	WeatherDetailsBox: {
		padding: 10,
	}
});