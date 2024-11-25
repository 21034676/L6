import React, { useState } from 'react';
import { TextInput, View, Text, Button } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const Add = ({ navigation, route }) => {
    const [letter, setLetter] = useState('');
    const [type, setType] = useState('Vowels');
    const { setDatasource } = route.params;

    return (
        <View style={{ padding: 10 }}>
            <View style={{ padding: 10 }}>
                <Text style={{ fontWeight: 'bold' }}>Letter:</Text>
                <TextInput
                    style={{ borderWidth: 1 }}
                    onChangeText={(text) => setLetter(text)}
                />
            </View>

            <View style={{ padding: 10 }}>
                <RNPickerSelect
                    value={type}
                    onValueChange={(value) => setType(value)}
                    items={[
                        { label: 'Vowels', value: 'Vowels' },
                        { label: 'Consonants', value: 'Consonants' },
                    ]}
                />
            </View>

            <Button
                title="SUBMIT"
                onPress={() => {
                    setDatasource((prevDatasource) => {
                        const updatedDatasource = [...prevDatasource];
                        const indexNum = type === 'Vowels' ? 0 : 1;
                        updatedDatasource[indexNum].data.push({ key: letter });
                        return updatedDatasource;
                    });
                    navigation.navigate('Home');
                }}
            />
        </View>
    );
};

export default Add;

