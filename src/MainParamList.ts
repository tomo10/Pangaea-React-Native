import { StackNavigationProp } from "@react-navigation/stack"
import { RouteProp } from "@react-navigation/native"
import { ProjectProps, Project } from "./Project"
import { ListProps } from "./List";

export type MainParamList = {
    Home: undefined;
    List: ListProps;
    Project: ProjectProps;
}

// a helper so dont have to pass this in to every component that needs it

export type MainStackNavProps<T extends keyof MainParamList> = {
    navigation: StackNavigationProp<MainParamList, T>;
    route: RouteProp<MainParamList, T>
}

// equivalent to this. sort of. 21 mins v.5 navigation vid ben awad

// export type MainStackNavProps<T> = {
//     navigation: StackNavigationProp<MainParamList, 'Home'>;
//     route: RouteProp<MainParamList, 'Project'>
// }