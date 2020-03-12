import * as React from "react";
import {
  Image, StyleSheet, View
} from "react-native";



export default ({ project }: ImageProps) => {

    
        return (
            <View style={[styles.container]}>
                <View
                    style={{ ...StyleSheet.absoluteFillObject, backgroundColor: "black" }}
                />
            </View>
        )
    }


const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: "black",
        },
        text: {
            color: 'white'
        },
        header: {
            marginTop: 24
        }
      });