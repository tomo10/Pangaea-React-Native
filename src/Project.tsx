import * as React from "react";
import { View, StyleSheet, Text, StatusBar, SafeAreaView } from "react-native";


import Image from './Image';
import Content from './Content';





export default () => {
 
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" hidden={false} backgroundColor="#6a51ae" />
            <Image {...{project}} />
            <Content {...{project}} />
        </SafeAreaView>
    )
}