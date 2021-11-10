import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Login from './components/Login.js';
import NotesPage from './components/NotesPage.js';
import Constants from 'expo-constants';

const App = () => {

  const [token, setToken] = useState(null);
  const [isAuthenticated, authenticate] = useState(false);
  const [username, updateUsername] = useState('');

  return (
    <View style={styles.container}>
      {isAuthenticated ?
        <NotesPage username={username} token={token} /> :
        <Login authenticate={authenticate} updateUsername={updateUsername} setToken={setToken} />
      }
    </View>
  )
};

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