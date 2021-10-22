import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Login from './components/Login.js';
import NotesPage from './components/NotesPage.js';
import Constants from 'expo-constants';

class App extends Component {

  state = {
    isUserValid: false,
    username: ''
  }

  isAuthenticated = (validity) => {
    this.setState(() => ({
      isUserValid: validity
    }));
  }

  updateUsername = (username) => {
    this.setState({
      username,
    })
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.isUserValid ?
          <NotesPage username={this.state.username} /> :
          <Login isAuthenticated={this.isAuthenticated} updateUsername={this.updateUsername} />
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 20
  },
});

export default App;