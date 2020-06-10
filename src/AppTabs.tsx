import React, { useContext } from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, Button } from "react-native";
import { Ionicons, AntDesign, EvilIcons } from '@expo/vector-icons';

import { AppParamList } from './AppParamList';
import { Center } from './Center';
import { AuthContext } from './AuthProvider';
import { HomeStack } from './HomeStack';
import { SearchStack } from './SearchStack';

interface AppTabsProps {
	[key: string]: any,
}

const Tabs = createBottomTabNavigator<AppParamList>();

export const AppTabs: React.FC<AppTabsProps> = ({ children }) => {
	return (
		<Tabs.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;

					// if (route.name === 'Home') {
					// 	iconName = focused
					// 		? 'ios-information-circle'
					// 		: 'ios-information-circle-outline';
					// } else if (route.name === 'Search') {
					// 	iconName = focused ? 'ios-list-box' : 'ios-list';
					// }

					// You can return any component that you like here!
					// return <Ionicons name={iconName} size={size} color={color} />;


					if (route.name === 'Home') {
						return <AntDesign name="home" size={24} color={color} />;
					} else if (route.name === 'Search') {
						return <EvilIcons name="search" size={24} color={color} />;
					}

					return <Ionicons name={iconName} size={size} color={color} />;

				},
			})}
			tabBarOptions={{
				activeTintColor: 'tomato',
				inactiveTintColor: 'gray',
			}}
		>
			<Tabs.Screen name='Home' component={HomeStack} />
			<Tabs.Screen name='Search' component={SearchStack} />
		</Tabs.Navigator>
	);
}