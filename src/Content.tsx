import * as React from "react";
import {
  StyleSheet, View, Text, ScrollView
} from "react-native";
import { Project } from "./Project";



interface ContentProps {
    project: Project;
}


export default ({project}: ContentProps) => {

    console.log('project', project)
    return (
        <ScrollView>
            <View style={styles.header}>
                {/* <Header {...{event, y}} />
                <Reply /> */}
                <Text style={styles.text}>{project.name}</Text>
            </View>
        </ScrollView>
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