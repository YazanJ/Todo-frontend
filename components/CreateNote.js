import React, { useState } from 'react';
import { View, Button } from 'react-native';
import Note from './Note.js';
import * as API from "../API.js";

const CreateNote = ({ username, refreshNotes }) => {

    const [text, setText] = useState('');

    const handleSubmit = () => {
        API.createNote(username, text)
            .then(data => refreshNotes())
        setText('')
    }
    return (
        <View>
            <Note
                text={text}
                handleChange={setText}
            />
            <Button
                title='Submit'
                onPress={handleSubmit}
            />
        </View>
    )
}

export default CreateNote;