import React from 'react';
import { View, Text } from 'react-native';


const DisplayNote = (props) => {

    const { note_text, pub_date } = props;
    return (
        <View>
            <Text>{note_text}</Text>
            <Text>{pub_date}</Text>
        </View>
    )
}

export default DisplayNote;