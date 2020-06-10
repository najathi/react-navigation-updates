import React, { useState, useRef, useEffect } from "react";
import { Button, Text, TouchableOpacity } from "react-native";
import { TypedNavigator, StackNavigationState } from "@react-navigation/native";
import { StackNavigationOptions } from "@react-navigation/stack";
import { StackNavigationEventMap } from "@react-navigation/stack/lib/typescript/src/types";

import { Center } from "./Center";
import { HomeNavProps, HomeParamList } from "./HomeParamList";
import { SearchParamList, SearchNavProps } from "./SearchParamList";

export const addProductRoutes = (Stack: TypedNavigator<
	HomeParamList | SearchParamList,
	StackNavigationState,
	any,
	any,
	any
>
) => {

	function Product({ navigation, route }: HomeNavProps<'Product'> | SearchNavProps<'Product'>) {
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

	function apiCall(x: any) {
		return x;
	}

	function EditProduct({ navigation, route }: HomeNavProps<'EditProduct'> | SearchNavProps<'EditProduct'>) {

		const [formState] = useState();
		const submit = useRef(() => { });

		submit.current = () => {
			// api call with new form state
			apiCall(formState);
			navigation.goBack();
		}

		useEffect(() => {
			navigation.setParams({ submit });
		}, [])

		return (
			<Center>
				<Text>editing {route.params.name}...</Text>
			</Center>
		);
	}

	return (
		<>
			<Stack.Screen
				options={({ route }) => ({
					headerTitle: `Edit: ${route.params.name}`,
					headerRight: () => (
						<TouchableOpacity
							style={{ margin: 10 }}
							onPress={() => {
								// submit the form
								// route.params.submit?.current()

								if (route.params.submit) {
									route.params.submit.current();
								}

							}}>
							<Text
								style={{
									color: 'red'
								}}>DONE</Text>
						</TouchableOpacity>
					)
				})}
				name="EditProduct"
				component={EditProduct} />
			<Stack.Screen
				options={({ route }) => ({
					headerTitle: `Product: ${route.params.name}`
				})}
				name="Product"
				component={Product} />
		</>
	);
}