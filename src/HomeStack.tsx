import React, { useContext, useState, useRef, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, TouchableOpacity, FlatList, Button } from "react-native";
import faker from "faker";

import { Center } from './Center';
import { AuthContext } from './AuthProvider';
import { HomeParamList, HomeNavProps } from './HomeParamList';
import { addProductRoutes } from './addProductRoutes';

interface HomeStackProps {
	[key: string]: any,
}

const Stack = createStackNavigator<HomeParamList>();

function Feed({ navigation }: HomeNavProps<'Feed'>) {
	return (
		<Center>
			<FlatList
				style={{ width: '100%' }}
				renderItem={({ item }) => {
					return <Button
						title={item}
						onPress={() => {
							navigation.navigate('Product', {
								name: item
							})
						}} />
				}}
				keyExtractor={(product, idx) => product + idx}
				data={Array.from(Array(50), () => faker.commerce.product())}
			/>
		</Center>
	);
}

export const HomeStack: React.FC<HomeStackProps> = () => {

	const { logout } = useContext(AuthContext);

	return (
		<Stack.Navigator initialRouteName="Feed">
			{addProductRoutes(Stack as any)}
			<Stack.Screen
				name="Feed"
				component={Feed}
				options={{
					headerRight: () => {
						return (
							<TouchableOpacity
								style={{
									margin: 10
								}}
								onPress={() => {
									logout()
								}}>
								<Text>
									LOGOUT
								</Text>
							</TouchableOpacity>
						)
					}
				}}
			/>
		</Stack.Navigator>
	);
}