import React from 'react';
import { View, StyleSheet } from 'react-native';

interface CenterProps {
	[key: string]: any;
	children: React.ReactNode;
}

export const Center: React.FC<CenterProps> = ({ children }) => {
	return (
		<View style={styles.container}>
			{children}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	}
});