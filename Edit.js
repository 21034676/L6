import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { datasource } from './Data.js';

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    inputContainer: {
        marginVertical: 10,
    },
    textLabel: {
        fontWeight: 'bold',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 5,
        borderRadius: 5,
        maxWidth: 100,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    button: {
        marginHorizontal: 5,
    },
});

const Edit = ({ navigation, route }) => {
    const { setDatasource, indexNum, letterIndex } = route.params;
    const [letter, setLetter] = useState(datasource[indexNum].data[letterIndex].key);

    const handleSave = () => {
        setDatasource((prevDatasource) => {
            const updatedDatasource = [...prevDatasource];
            updatedDatasource[indexNum].data[letterIndex].key = letter;
            return updatedDatasource;
        });
        navigation.navigate('Home');
    };

    const handleDelete = () => {
        setDatasource((prevDatasource) => {
            const updatedDatasource = [...prevDatasource];
            updatedDatasource[indexNum].data.splice(letterIndex, 1);
            return updatedDatasource;
        });
        navigation.navigate('Home');
    };

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Text style={styles.textLabel}>Letter:</Text>
                <TextInput
                    style={styles.input}
                    maxLength={1}
                    value={letter}
                    onChangeText={(text) => setLetter(text)}
                />
            </View>

            <View style={styles.buttonRow}>
                <Button title="Save" onPress={handleSave} style={styles.button} />
                <Button title="Delete" onPress={handleDelete} style={styles.button} />
            </View>
        </View>
    );
};

export default Edit;
