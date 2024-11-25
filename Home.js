import React from 'react';
import {StatusBar, Button, SectionList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {datasource} from "./Data.js";

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 15,
        margin: 10,
        textAlign: 'left',
    },
    opacityStyle: {
        borderWidth: 1,
    },
    headerText: {
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
        fontWeight:'bold',
    },
});

const renderItem = ({item}) => {
    return (
        <TouchableOpacity style={styles.opacityStyle}>
            <Text style={styles.textStyle}>{item.key}</Text>
        </TouchableOpacity>
    );
};

const App = () => {
    return (
        <View>
            <StatusBar/>
            <Button title='Add Letter'/>
            <SectionList sections={datasource} renderItem={renderItem}
                         renderSectionHeader={({section:{title,bgcolor}})=>(
                             <Text style={[styles.headerText,{backgroundColor:bgcolor}]}>
                                 {title}
                             </Text>
                         )}/>
        </View>
    );
};

export default Home;
