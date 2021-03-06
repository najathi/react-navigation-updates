import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { ProductParamList } from "./ProductParamList";

export type HomeParamList = {
	Feed: undefined;
	// Product: {
	// 	name: string
	// };
	// EditProduct: {
	// 	name: string,
	// 	submit?: React.MutableRefObject<() => void>
	// };
} & ProductParamList;

export type HomeNavProps<T extends keyof HomeParamList> = {
	navigation: StackNavigationProp<HomeParamList, T>;
	route: RouteProp<HomeParamList, T>;
}