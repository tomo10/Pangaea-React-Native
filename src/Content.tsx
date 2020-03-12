import * as React from "react";
import {
  StyleSheet, View, Text, ScrollView
} from "react-native";
import { Project } from "./Project";
import Animated from "react-native-reanimated";
import UserRow from './components/UserRow';
import { onScroll } from "react-native-redash";
import { LinearGradient }from "expo-linear-gradient"
import { MIN_IMAGE_HEIGHT, MAX_IMAGE_HEIGHT } from "./Model";

const {
    interpolate, Extrapolate,
  } = Animated;

interface ContentProps {
    project: Project;
    y: Animated.Value<number>;
}


export default ({project, y}: ContentProps) => {

    const height = interpolate(y, {
        inputRange: [-MAX_IMAGE_HEIGHT, -40 / 2],
        outputRange: [0, MAX_IMAGE_HEIGHT + 40],
        extrapolate: Extrapolate.CLAMP,
      });
      const opacity = interpolate(y, {
        inputRange: [-MAX_IMAGE_HEIGHT / 2, 0, MAX_IMAGE_HEIGHT / 2],
        outputRange: [0, 1, 0],
        extrapolate: Extrapolate.CLAMP,
      });

    return (
        <Animated.ScrollView
            onScroll={onScroll({ y })}
            style={styles.container}
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={1}
            stickyHeaderIndices={[1]}
        >
            <View style={styles.cover}>
                <Animated.View
                style={[styles.gradient, { height }]}
                >
                <LinearGradient
                    style={StyleSheet.absoluteFill}
                    start={[0, 0.3]}
                    end={[0, 1]}
                    colors={["transparent", "rgba(0, 0, 0, 0.2)", "black"]}
                />
                </Animated.View>
                <View style={styles.artistContainer}>
                <Animated.Text style={[styles.artist, { opacity }]}>{project.name}</Animated.Text>
                </View>
            </View>
            <View style={styles.header}>
             
            </View>
            <View style={styles.header}>
                {/* <Header {...{event, y}} />
                <Reply /> */}
                {/* <Text style={styles.text}>{project.name}</Text> */}
            </View>
            <View style={styles.donors}>
                {
                project.donors.map((user, key) => {
                    <UserRow {...{user, key}} />
                })
                }
                <Text style={styles.text}>TEST TEST</Text>
            </View>
        </Animated.ScrollView>
    )
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: MIN_IMAGE_HEIGHT,
      backgroundColor: "red",
    },
    text: {
        color: 'white'
    },
    cover: {
        height: MAX_IMAGE_HEIGHT,
      },
      gradient: {
        position: "absolute",
        left: 0,
        bottom: 0,
        right: 0,
        alignItems: "center",
      },
      artistContainer: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: "center",
        alignItems: "center",
      },
      artist: {
        textAlign: "center",
        color: "white",
        fontSize: 48,
        fontWeight: "bold",
      },
      header: {
        marginTop: -40,
      },
      donors: {
        paddingTop: 32,
        backgroundColor: "black",
      },
  });