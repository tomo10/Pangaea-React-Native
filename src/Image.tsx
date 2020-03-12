import * as React from "react";
import {
  Image, StyleSheet, View, Dimensions, Text
} from "react-native";
import { Project } from "./Project";
import { LinearGradient } from "expo-linear-gradient";
import Animated from "react-native-reanimated";
import { MAX_IMAGE_HEIGHT, IMAGE_DELTA, BUTTON_HEIGHT } from "./Model";
const { height, width } = Dimensions.get("window");
// const picHeight = height / 3;

interface ImageProps {
    project: Project;
    y: Animated.Value<number>;
}

const { interpolate, Extrapolate } = Animated;


export default ({ project: {image}, y }: ImageProps) => {
    console.log('ARE YOU EVEN FUCKING MOUNTING YOU CUNT?', image)
    const scale: any = interpolate(y, {
        inputRange: [-MAX_IMAGE_HEIGHT, 0],
        outputRange: [4, 1],
        extrapolateRight: Extrapolate.CLAMP,
      });
      const opacity = interpolate(y, {
        inputRange: [-64, 0, IMAGE_DELTA],
        outputRange: [0, 0.2, 1],
        extrapolate: Extrapolate.CLAMP,
      });


        return (
        <Animated.View style={[styles.container, { transform: [{ scale }] }]}>
            <Image style={styles.image} source={{uri: image}} />
            <Animated.View
                style={{ ...StyleSheet.absoluteFillObject, backgroundColor: "black", opacity }}
            />
        </Animated.View>
        )
    }

    const styles = StyleSheet.create({
        container: {
          ...StyleSheet.absoluteFillObject,
          height: MAX_IMAGE_HEIGHT + BUTTON_HEIGHT * 2,
        },
        image: {
          ...StyleSheet.absoluteFillObject,
          width: undefined,
          height: undefined,
        },
      });