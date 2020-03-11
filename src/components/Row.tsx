import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";

import { Project } from "../../data/Seed";

interface RowProps {
  project: Project;
}

export default ({ project }: RowProps) => (

  <View style={styles.row}>
 
    <View style={[styles.cell, { flex: 1 }]}>
      <Text style={styles.project}>{project.name}</Text>
    </View>
    <View style={styles.cell}>
      <Icon name="more-horizontal" color="#b2b3b4" size={24} />
    </View>
  </View>
);

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