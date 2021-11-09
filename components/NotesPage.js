import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import CreateNote from './CreateNote.js';
import DisplayNote from './DisplayNote';
import * as API from "../API.js";
import * as Location from 'expo-location';

const NotesPage = ({ username }) => {
    const [notes, setNotes] = useState([])

    const getNotes = () => {
        API.getNotes().then((notes) => {
            setNotes(notes)
        })
    }

    const refreshNotes = () => {
        getNotes();
    }

    useEffect(() => {
        let mounted = true;
        API.getNotes()
            .then((notes) => {
                if (mounted) {
                    setNotes(notes)
                }
            })
        return () => mounted = false;
    }, []);


    return (
        <View>
            {/* <Text>{text}</Text> */}
            <Text style={{ fontWeight: "bold", paddingBottom: 10 }}>Hello {username} </Text>
            <Text>Notes:</Text>
            <ScrollView>
                {notes.map((note) => (
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
            <View style={{ paddingTop: 20 }}>
                <CreateNote
                    username={username}
                    refreshNotes={refreshNotes}
                />
            </View>
        </View>
    )
};

export default NotesPage;

// state = {
    //     notes: [],
    //     location: null,
    //     errorMsg: null,
    //     getLocationIntervalID: null,
    // }

    // constructor() {
    //     // this.getLocation = this.getLocation.bind(this);
    // }

    // getLocation = () => {
    //     (async () => {
    //         let { status } = await Location.requestForegroundPermissionsAsync();
    //         if (status !== 'granted') {
    //             this.setState({
    //                 errorMsg: 'Permission to access location was denied'
    //             })
    //             return;
    //         }

    //         let location = await Location.getCurrentPositionAsync({});
    //         this.setState({
    //             location,
    //         })
    //     })();
    // }

// const getLocationIntervalID = setInterval(this.getLocation, 5000);
    // this.setState({
    //     getLocationIntervalID
    // });

    // componentWillUnmount = () => {
    //     // clearInterval(this.state.getLocationIntervalID);
    // }

    // let text = 'Waiting...';
    // if (this.state.errorMsg) {
    //     text = this.state.errorMsg;
    // } else if (this.state.location) {
    //     text = JSON.stringify(this.state.location)
    // }