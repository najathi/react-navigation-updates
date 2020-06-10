import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { ProductParamList } from "./ProductParamList";

export type SearchParamList = {
	Search: undefined;
	// Product: {
	// 	name: string
	// };
	// EditProduct: {
	// 	name: string,
	// 	submit?: React.MutableRefObject<() => void>
	// };
} & ProductParamList;

export type SearchNavProps<T extends keyof SearchParamList> = {
	navigation: StackNavigationProp<SearchParamList, T>;
	route: RouteProp<SearchParamList, T>;
}