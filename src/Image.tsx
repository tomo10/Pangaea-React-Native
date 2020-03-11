import * as React from "react";
import {
  Image, StyleSheet, View
} from "react-native";



export default ({ project: {image}}: ImageProps) => {

    
        return (
            <View style={[styles.container, {transform: [{ scale }] }]}>
                <View
                    style={{ ...StyleSheet.absoluteFillObject, backgroundColor: "black", opacity }}
                />
            </View>
        )
    }