import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"

import Home from './Home';
import Project from './Project';
import Settings from './Settings';

const AppStack = createStackNavigator<MainParamList>();
const Tabs = createBottomTabNavigator<MainParamList>();

const AppStackScreen = () => (
    <AppStack.Navigator
        screenOptions={{
            headerShown: false,
            // headerStyle: {
            //   backgroundColor: 'black',
            // },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold',
            },
        }}
        >
      <AppStack.Screen name="Home" component={Home} />
      <AppStack.Screen name="Project" component={Project} />
    </AppStack.Navigator>
)

export const Routes: React.FC<RoutesProps> = ({}) => {

    return (
        <NavigationContainer>
            <Tabs.Navigator>
                <Tabs.Screen name="Home" component={AppStackScreen}  />
                <Tabs.Screen name="Settings" component={Settings} />
            </Tabs.Navigator>
        </NavigationContainer>
      );
}