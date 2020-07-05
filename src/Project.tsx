import * as React from "react";
import { View, StyleSheet, Text, StatusBar, SafeAreaView } from "react-native";
import Animated from "react-native-reanimated";
import Image from './Image';
import Content from './Content';
import Cover from "./Cover";
import Content2 from "./Content2";

export interface User {
    name: string;
}

export interface Project {
    name: string;
    funding_required: number;
    image: string;
    startDate: number;
    notes: string;
    donors: User[];
}

export interface ProjectProps {
    project: Project;
}

export default ({ route }) => {
    const { project } = route.params;
    const y = new Animated.Value(0);

    return (
        <View style={styles.container}>
            {/* <StatusBar barStyle="light-content" hidden={false} backgroundColor="red" /> */}
            {/* <Image {...{project, y}} />
            <Text style={styles.text}>WANKERS</Text>
            <Content {...{project, y}} /> */}
            <Cover {...{project, y}} />
            <Content2 {...{project, y}} />
        </View>
    )
}

// export default Project;


const styles = StyleSheet.create({
    container: {
    // marginTop: 100,
      flex: 1,
      backgroundColor: "black",
    },
    text: {
        color: 'white'
    }
  });