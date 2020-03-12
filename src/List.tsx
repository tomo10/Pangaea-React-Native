import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Project } from './Project';
import Row from './components/Row';

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

export const List: React.FC<Props> = ({ projects, navigation }) => {

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