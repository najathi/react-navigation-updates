import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, TouchableOpacity, FlatList, Button } from "react-native";
import faker from "faker";

import { Center } from './Center';
import { AuthContext } from './AuthProvider';
import { HomeParamList, HomeNavProps } from './HomeParamList';

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

function Product({ navigation, route }: HomeNavProps<'Product'>) {
	return (
		<Center>
			<Text>{route.params.name}</Text>
			<Button
				title="Edit This Product"
				onPress={() => navigation.navigate('EditProduct', {
					name: route.params.name
				})} />
		</Center>
	);
}

function EditProduct({ navigation, route }: HomeNavProps<'EditProduct'>) {
	return (
		<Center>
			<Text>editing {route.params.name}...</Text>
		</Center>
	);
}

export const HomeStack: React.FC<HomeStackProps> = () => {

	const { logout } = useContext(AuthContext);

	return (
		<Stack.Navigator initialRouteName="Feed">
			<Stack.Screen
				options={({ route }) => ({
					headerTitle: `Edit: ${route.params.name}`
				})}
				name="EditProduct"
				component={EditProduct} />
			<Stack.Screen
				options={({ route }) => ({
					headerTitle: `Product: ${route.params.name}`
				})}
				name="Product"
				component={Product} />
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