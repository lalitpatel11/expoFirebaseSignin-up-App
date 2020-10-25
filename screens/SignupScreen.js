import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, KeyboardAvoidingView, TouchableOpacity, Alert } from 'react-native';
import { Button, Item, Input, Label } from 'native-base';
import * as firebase from 'firebase';

export default class Signup extends Component {
    state = {
        email: "",
        password: ""
    }
    static navigationOptions = {
        title: "Sign up"
    }
    userSignUp(email, password) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                this.props.navigation.navigate("HomeScreen")
            })
            .catch(err => {
                Alert.alert(err.message)
            })
    }
    render() {
        return (
            <KeyboardAvoidingView style={styles.container}
                behavior="position"
            >
                <View style={{ alignItems: "center", justifyContent: 'center' }}>
                    <Image
                        style={{ width: 280, height: 280, borderRadius: 140 }}
                        source={require("../assets/logo.jpg")}
                    />
                </View>
                <Item floatingLabel>
                    <Label>Email id</Label>
                    <Input
                        value={this.state.email}
                        onChangeText={(text) => this.setState({ email: text })}
                    />
                </Item>

                <Item floatingLabel>
                    <Label>Password</Label>
                    <Input
                        secureTextEntry={true}
                        value={this.state.password}
                        onChangeText={(text) => this.setState({ password: text })}

                    />
                </Item>
                <Button full rounded danger
                    style={{
                        margin: 10,
                        justifyContent: "center",
                    }}
                    onPress={() => this.userSignUp(this.state.email, this.state.password)}
                >
                    <Text style={{
                        fontSize: 22,
                        color: "white"
                    }}> Sign up</Text>
                </Button>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate("login")}
                >
                    <Text style={{ textAlign: "center" }}>already have an account ?</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: "flex-start",
        padding: 10
    },
});