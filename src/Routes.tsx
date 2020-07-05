import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { MainParamList } from '../src/MainParamList';
import { Ionicons, AntDesign } from '@expo/vector-icons';

import Home from './Home';
import Project from './Project';
import Calendar from './Calendar';

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
      <AppStack.Screen 
        name="Project" 
        options={({route}) => ({
            headerShown: true,
            headerTitle: route.params.project.name,
            headerStyle: {
                backgroundColor: 'black',
            },
            headerTintColor: 'white',
            headerBackTitle: ' '
        })} 
        component={Project} />
    </AppStack.Navigator>
)

export const Routes: React.FC = ({}) => {

    return (
        <NavigationContainer>
            <Tabs.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
      
                  if (route.name === 'Home') {
                    iconName = focused
                      ? 'ios-home'
                      : 'ios-home';
                  } else if (route.name === 'Calendar') {
                    iconName = focused ? 'ios-list-box' : 'ios-list';
                  }
      
                  // You can return any component that you like here!
                  return <Ionicons name={iconName} size={size} color={color} />;
                },
              })}
              tabBarOptions={{
                activeTintColor: 'white',
                inactiveTintColor: 'gray',
                style: {backgroundColor: 'black', borderColor: 'black'}
              }}
             
            >
                <Tabs.Screen name="Home" component={AppStackScreen}  />
                <Tabs.Screen name="Calendar" component={Calendar} />
            </Tabs.Navigator>
        </NavigationContainer>
      );
}