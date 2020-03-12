import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";

import { Project } from "../Project";

// import { useNavigation } from "react-navigation-hooks";


interface RowProps {
  project: Project;
}

export default ({ project, navigation }: RowProps) => {
  
    console.log('project row')
    return (
    <TouchableOpacity onPress={() => navigation.navigate('Project', {project})} style={styles.row}>
        <View style={[styles.cell, { flex: 1 }]}>
            <Text style={styles.project}>{project.name}</Text>
            </View>
        <View style={styles.cell}>
            <Icon name="more-horizontal" color="#b2b3b4" size={24} />
        </View>
    </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    backgroundColor: "black",
  },
  cell: {
    padding: 16,
    justifyContent: "center",
  },
  index: {
    color: "#b2b3b4",
  },
  project: {
    color: "#b2b3b4",
  },
  name: {
    color: "white",
  },
});