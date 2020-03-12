import * as React from "react";
import { View, StyleSheet, Text, StatusBar, SafeAreaView } from "react-native";


export default () => {

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" hidden={false} backgroundColor="#6a51ae" />
            <Text style={styles.text}>SETTINGS</Text>
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