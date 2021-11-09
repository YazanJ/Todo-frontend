import React, { useState } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import * as API from "../API.js";

const Login = ({ authenticate, updateUsername }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setErrorMsg] = useState('');

    const handleSubmit = () => {
        API.login(
            username,
            password
        )
            .then(data => {
                authenticate(true)
                updateUsername(username)
            })
            .catch(error => {
                authenticate(false)
                setErrorMsg(error.message)
                setUsername('')
                setPassword('')
            })
    }

    const isEnabled = username.length > 0 && password.length > 0;
    return (
        <View>
            < TextInput
                placeholder='Username'
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                placeholder='Password'
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
            />
            <Button
                disabled={!isEnabled}
                title='Enter'
                onPress={handleSubmit}
            />
            {error.length > 0 ?
                <Text>{error}</Text> :
                null
            }
        </View >
    );
};

export default Login;