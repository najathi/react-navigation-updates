import React, { useState, useEffect, useContext } from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { NavigationContainer, RouteProp } from "@react-navigation/native";
import { Text, Button, ActivityIndicator, AsyncStorage } from "react-native";

import { Center } from './Center';
import { AuthParamList, AuthNavProps } from './AuthParamList';
import { AuthContext } from './AuthProvider';
import { AppTabs } from './AppTabs';
import { AuthStack } from './AuthStack';

interface RoutesProps {
	[key: string]: any,
}

export const Routes: React.FC<RoutesProps> = ({ }) => {

	const { user, login, logout } = useContext(AuthContext);

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		AsyncStorage.getItem('user')
			.then(userString => {
				if (userString) {
					// decode it
					login();

				}
				setLoading(false);
				console.log('userString', userString);
			})
			.catch(err => {
				console.log(err);
				console.log('catch');
				setLoading(false);
			})
	}, []);

	console.log('loading', loading);

	if (loading) {
		return (
			<Center>
				<ActivityIndicator size="large" />
			</Center>
		);
	}

	return (
		<NavigationContainer>

			{user ?

				// <Center>
				// 	<Text>you exist</Text>
				// </Center>

				<AppTabs />

				:

				<AuthStack />

			}

		</NavigationContainer>
	);
}
