import React, { Component } from 'react';
import { View, TextInput } from 'react-native';

const Note = ({ text, handleChange }) => {
    return (
        <View>
            <TextInput
                value={text}
                placeholder='Enter text'
                multiline={true}
                onChangeText={(text) => handleChange(text)}
            />
        </View>
    )
};

export default Note;
