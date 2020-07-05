  
import * as React from "react";
import {
  StyleSheet, View, Text
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Animated from "react-native-reanimated";
import { onScroll } from "react-native-redash";

import {
  MAX_HEADER_HEIGHT, MIN_HEADER_HEIGHT,
} from "./Model";
import UserRow from "./components/UserRow";
import ShufflePlay, { BUTTON_HEIGHT } from "./ShufflePlay";
import Header from "./Header";
import { Project } from "./Project";

interface ContentProps {
  project: Project;
  y: Animated.Value<number>;
}

const {
  interpolate, Extrapolate,
} = Animated;

export default ({ project, y }: ContentProps) => {
  const height = interpolate(y, {
    inputRange: [-MAX_HEADER_HEIGHT, -BUTTON_HEIGHT / 2],
    outputRange: [0, MAX_HEADER_HEIGHT + BUTTON_HEIGHT],
    extrapolate: Extrapolate.CLAMP,
  });
  const opacity = interpolate(y, {
    inputRange: [-MAX_HEADER_HEIGHT / 2, 0, MAX_HEADER_HEIGHT / 2],
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
          <Animated.Text style={[styles.artist, { opacity }]}>{project.notes}</Animated.Text>
        </View>
      </View>
      <View style={styles.header}>
        <Header {...{ y, project }} />
        <View style={{height: 25}}>
          <Animated.Text style={[styles.artist, { opacity }]}>{new Date(project.startDate).toDateString()}</Animated.Text>
        </View>
        <ShufflePlay />
      </View>
      <View style={styles.tracks}>
        {
          project.donors.map((donor, key) => (
            <UserRow
              index={key + 1}
              {...{ donor, key }}
            />
          ))
        }
      </View>
    </Animated.ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: MIN_HEADER_HEIGHT - BUTTON_HEIGHT / 2,
  },
  cover: {
    height: MAX_HEADER_HEIGHT - BUTTON_HEIGHT,
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
    fontSize: 18,
    fontWeight: "bold",
  },
  header: {
    marginTop: -BUTTON_HEIGHT,
  },
  tracks: {
    paddingTop: 32,
    backgroundColor: "black",
  },
});