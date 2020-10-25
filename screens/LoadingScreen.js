import React, { Component } from 'react';
import {View,Text,StyleSheet,ActivityIndicator} from 'react-native';
import * as firebase from 'firebase';
export default class LoadingScreen extends Component {
    static navigationOptions={
    header:null
    }
    componentDidMount(){
      this.unSuscribeAuth=  firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                this.props.navigation.navigate("HomeScreen")
            }else{
                this.props.navigation.navigate("login")
            }
        })
    }
    componentWillUnmount(){
        this.unSuscribeAuth()
    }
    render() {
        return (
       <View style={styles.container}>
           <ActivityIndicator size="large" color="#d9534f"/>
       </View>

        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent:"center",
    },
  });