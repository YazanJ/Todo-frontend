import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import * as API from "../API.js";

class Login extends Component {
    state = {
        username: '',
        password: '',
        error: ''
    }

    handleChange = (fieldName, value) => {
        this.setState({
            [fieldName]: value,
        });
    };


    handleSubmit = (isAuthenticated, updateUsername) => {
        API.login(
            this.state.username,
            this.state.password
        )
            .then(data => {
                isAuthenticated(true)
                updateUsername(this.state.username)
            })
            .catch(error => {
                isAuthenticated(false)
                this.setState({
                    error: error.message,
                })
            })
    }

    render() {
        const { isAuthenticated, updateUsername } = this.props;
        const isEnabled = this.state.username.length > 0 && this.state.password.length > 0;
        return (
            <View>
                < TextInput
                    placeholder='Username'
                    value={this.state.username}
                    onChangeText={text => this.handleChange('username', text)}
                />
                <TextInput
                    placeholder='Password'
                    secureTextEntry={true}
                    value={this.state.password}
                    onChangeText={text => this.handleChange('password', text)}
                />
                <Button
                    disabled={!isEnabled}
                    title='Enter'
                    onPress={() => this.handleSubmit(isAuthenticated, updateUsername)}
                />
                {this.state.error.length > 0 ?
                    <Text>{this.state.error}</Text> :
                    null
                }
            </View >
        );
    }
}

export default Login;