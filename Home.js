import React, { useState } from 'react';
import { StatusBar, Button, SectionList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { datasource as initialDatasource } from './Data.js';

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 15,
        margin: 10,
        textAlign: 'left',
    },
    opacityStyle: {
        borderWidth: 1,
        margin: 5,
        padding: 5,
    },
    headerText: {
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
        fontWeight: 'bold',
    },
});

const Home = ({ navigation }) => {
    const [datasource, setDatasource] = useState(initialDatasource);

    const renderItem = ({ item, index, section }) => {
        return (
            <TouchableOpacity
                style={styles.opacityStyle}
                onPress={() => {
                    // Get the section index to determine whether it's Vowels or Consonants
                    const sectionIndex = datasource.findIndex((s) => s.title === section.title);
                    navigation.navigate('Edit', {
                        setDatasource,
                        indexNum: sectionIndex,
                        letterIndex: index,
                    });
                }}
            >
                <Text style={styles.textStyle}>{item.key}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View>
            <StatusBar />
            <Button
                title="Add Letter"
                onPress={() => navigation.navigate('Add', { setDatasource })}
            />
            <SectionList
                sections={datasource}
                keyExtractor={(item, index) => item.key + index}
                renderItem={renderItem}
                renderSectionHeader={({ section: { title, bgcolor } }) => (
                    <Text style={[styles.headerText, { backgroundColor: bgcolor }]}>
                        {title}
                    </Text>
                )}
            />
        </View>
    );
};

export default Home;

