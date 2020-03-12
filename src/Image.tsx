import * as React from "react";
import {
  Image, StyleSheet, View
} from "react-native";
import { Project } from "./Project";

interface ImageProps {
    project: Project;
}

export default ({ project: {image} }: ImageProps) => {

    
        return (
            <View style={[styles.container]}>
                <Image 
                    source={{uri: image}} 
                    style={{
                        height: '45%',
                        width: '100%'
                    }}
                    />
            </View>
        )
    }


const styles = StyleSheet.create({
        container: {
            ...StyleSheet.absoluteFillObject,
            // height: '30%',
            // width: '100%',
            // backgroundColor: 'white'
        }
      });