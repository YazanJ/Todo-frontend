import React, { Component } from 'react';
import { View, Button } from 'react-native';
import Note from './Note.js';
import * as API from "../API.js";

class CreateNote extends Component {

    state = {
        text: ''
    }

    handleChange = (text) => {
        this.setState({
            text,
        });
    };

    handleSubmit = (username, refreshNotes) => {
        API.createNote(username, this.state.text)
            .then(data => refreshNotes())
        this.setState({
            text: ''
        });
    }

    render() {
        const { username, refreshNotes } = this.props;
        return (
            <View>
                <Note
                    text={this.state.text}
                    handleChange={this.handleChange}
                />
                <Button
                    title='Submit'
                    onPress={() => this.handleSubmit(username, refreshNotes)}
                />
            </View>
        )
    }

}

export default CreateNote;