import { StackNavigationProp } from "@react-navigation/stack"
import { RouteProp } from "@react-navigation/native"

export type MainParamList = {
    Home: undefined;
    Project: {
        name: string;
        funding_required: number;
        image: string;
    };
}

export type MainStackNavProps<T extends keyof MainParamList> = {
    navigation: StackNavigationProp<MainParamList, T>;
    route: RouteProp<MainParamList, T>
}