import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator,Alert } from 'react-native';
import { Button } from 'native-base';
import * as firebase from 'firebase';
export default class HomeScreen extends Component {
    state = {
        email: "",

    }
    static navigationOptions = {
        title: "Home Page"
    }
    componentDidMount() {
        this.unSuscribeAuth = firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({
                    email: user.email
                })
            } else {
                this.props.navigation.navigate("login")
            }
        })
    }
    userSignOut(){
        firebase.auth().signOut()
        .catch(err=>{
            Alert.alert(err.message)
        })
    }
    componentWillUnmount(){
        this.unSuscribeAuth()
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={{ textAlign: "center" }}>
                    you are successfully logged in as {this.state.email}
                </Text>
                <Button full rounded danger
                    style={{
                        margin: 10,
                        justifyContent: "center",
                    }}
                    onPress={()=>this.userSignOut()}
                >
                    <Text style={{
                        fontSize: 22,
                        color: "white"
                    }}>Log Out</Text>
                </Button>
            </View>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: "center",
    },
});