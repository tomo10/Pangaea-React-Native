import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, Dimensions } from 'react-native';
import { data } from '../data/Seed'
import { LinearGradient } from "expo-linear-gradient";

import { List } from './List';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackNavProps } from './MainParamList';

const { height, width } = Dimensions.get("window");
const picHeight = height / 3;


const mapProjects = <T extends {}>(arr: T) => {
    return arr;
}



const Home = ({navigation}: MainStackNavProps<'Home'>) => {

    return (
        <SafeAreaView style={styles.container}>
            <View style={{height: picHeight}}>
                <Image 
                    source={{uri: "https://www.telegraph.co.uk/content/dam/Travel/2018/December/Okavango-delta-GettyImages-111650618.jpg"}} 
                    style={{width, height: picHeight}}
                    />
                <View style={[styles.gradient, {height: picHeight / 2}]}>
                    <LinearGradient 
                        style={StyleSheet.absoluteFill}
                        start={[0, 0.5]}
                        end={[0, 1]}
                        colors={['transparent', 'rgba(0,0,0,0.8)']}
                    />
                </View>
            </View>
            <Text style={styles.title}>Pangaea</Text>
            <List projects={data} navigation={navigation} />
        </SafeAreaView>
    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
      },
    title: {
        textAlign: "center",
        color: "white",
        fontSize: 48,
        fontWeight: "bold",
      },
      gradient: {
        position: "absolute",
        left: 0,
        bottom: 0,
        right: 0,
        alignItems: "center",
      }
});