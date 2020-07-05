import * as React from "react";
import { View, StyleSheet, Text, StatusBar, SafeAreaView } from "react-native";


export default () => {
    const dateNow = new Date();


    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" hidden={false} backgroundColor="#6a51ae" />
            <Text style={styles.text}>CALENDAR</Text>
            <Text style={styles.text}>{dateNow.toTimeString()}</Text>
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "black",
    },
    text: {
        color: 'white'
    }
  });