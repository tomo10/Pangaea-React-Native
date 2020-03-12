import * as React from "react";
import { View, StyleSheet, Text, StatusBar, SafeAreaView } from "react-native";
import Image from './Image';
import Content from './Content';
// import { Project } from "../data/Seed";

export interface Project {
    name: string;
    funding_required: number;
    image: string;
}

interface ProjectProps {
    project: Project;
}

export default ({route}) => {
    const { project } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" hidden={false} backgroundColor="#6a51ae" />
            <Image {...{project}} />
            <Content {...{project}} />
        </SafeAreaView>
    )
}

// export default Project;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "black",
    },
    text: {
        color: 'white'
    }
  });