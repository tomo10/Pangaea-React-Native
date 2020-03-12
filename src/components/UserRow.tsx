import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { User } from "../Project";



interface UserRowProps {
  user: User;
}

export default ({ user }: UserRowProps) => {
    
  console.log('user:', user)
    return (
    <View style={styles.row}>
        <View style={[styles.cell, { flex: 1 }]}>
            <Text style={styles.project}>{user.name}</Text>
            </View>
        <View style={styles.cell}>
            {/* <Icon name="more-horizontal" color="#b2b3b4" size={24} /> */}
        </View>
    </View>
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