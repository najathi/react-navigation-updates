import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, Button } from "react-native";

import { AuthNavProps } from './AuthParamList';
import { AuthContext } from './AuthProvider';
import { Center } from './Center';

interface AuthStackProps {
	[key: string]: any,
}

const Stack = createStackNavigator();

function Login({ navigation }: AuthNavProps<'Login'>) {

	const { user, login } = useContext(AuthContext);

	return (
		<Center>
			<Text>I'm a Login screen</Text>
			<Button
				title="log me in"
				onPress={() => {
					login();
				}} />
			<Button
				title="go to register"
				onPress={() => {
					navigation.navigate('Register');
				}} />
		</Center>
	);
}

function Register({
	navigation,
	route
}: AuthNavProps<'Register'>
	// {
	// 	navigation: StackNavigationProp<AuthParamList, 'Register'>;
	// 	route: RouteProp<AuthParamList, 'Register'>;
	// }
) {
	return (
		<Center>
			<Text>I'm a Register screen</Text>
			<Text>route name: {route.name}</Text>
			<Button
				title="go to register"
				onPress={() => {
					navigation.navigate('Login');
					// navigation.goBack();
				}} />
		</Center>
	);
}

export const AuthStack: React.FC<AuthStackProps> = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				header: () => null
			}}
			initialRouteName="Login"
		>

			<Stack.Screen
				name="Login"
				options={{
					headerTitle: 'Sign In'
				}}
				component={Login} />

			<Stack.Screen
				name="Register"
				options={{
					// header: () => null,
					headerTitle: 'Sign Up'
				}}
				component={Register} />

		</Stack.Navigator>
	);
}