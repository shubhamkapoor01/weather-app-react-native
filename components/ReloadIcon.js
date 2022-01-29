import { View, StyleSheet, Platform } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../utils/index';

export default function ReloadIcon({load}) {
	const reloadIconName = Platform.OS === 'ios' ? 'ios-refresh' : 'md-refresh';

	return (
		<View style={styles.reloadIcon}>
			<Ionicons
				name={reloadIconName} 
				color={colors.PRIMARY_COLOR}
				onPress={load}
				size={24}  />
		</View>
	);
}

const styles = StyleSheet.create({
	reloadIcon: {
		position: 'absolute',
		top: 40,
		right: 20,
	}
})