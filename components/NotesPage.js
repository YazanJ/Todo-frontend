import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import CreateNote from './CreateNote.js';
import DisplayNote from './DisplayNote';
import * as API from "../API.js";


class NotesPage extends Component {

    state = {
        notes: []
    }

    getNotes = () => {
        API.getNotes().then((notes) => {
            this.setState({
                notes,
            })
        })
    }

    componentDidMount = () => {
        this.getNotes();
    }

    refreshNotes = () => {
        this.getNotes();
    }

    render() {
        const { username } = this.props
        return (
            <View>
                <Text style={{ fontWeight: "bold" }}>Hello {username} </Text>
                <Text>Notes:</Text>
                <ScrollView>
                    {this.state.notes.map((note) => (
                        <View
                            key={note["id"]}
                            style={{ paddingTop: 10 }}
                        >
                            <DisplayNote
                                note_text={note["note_text"]}
                                pub_date={note["pub_date"]}
                            />
                        </View>
                    ))}
                </ScrollView>
                {/* <View style={{ paddingTop: 20 }}> */}
                <View>
                    <CreateNote
                        username={username}
                        refreshNotes={this.refreshNotes}
                    />
                </View>
            </View>
        )
    }
}

export default NotesPage;