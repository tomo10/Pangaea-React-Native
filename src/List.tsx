import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Project } from './Project';
import Row from './components/Row';
import { MainStackNavProps } from './MainParamList';

interface Props {
    projects: Array<Project>;
}

// const mayProjects = (arr: Array<Project>) => {
//     return arr.map(x => 
//     <Text style={styles.title}>
//         {x.name}
//     </Text> 
//     )
// }

export const List = ({ projects, navigation}: MainStackNavProps<"Home">) => {

    return (
        <View>
            {
            projects.map((project, key) => (
                <Row 
                {...{project, key, navigation}}
                />
            ))
            }
        </View>
    )
}



const styles = StyleSheet.create({
    title: {
        // textAlign: "center",
        color: "white",
        fontSize: 16,
        fontWeight: '500',
      },
});