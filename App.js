import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createStackNavigator ,createSwitchNavigator} from 'react-navigation';
import SignupScreen from './screens/SignupScreen';
import LoginScreen from './screens/LoginScreen';
import LoadingScreen from './screens/LoadingScreen';
import HomeScreen from './screens/HomeScreen';
import * as firebase from 'firebase';
import 'firebase/firestore';
import {firebaseConfig} from './config';

!firebase.apps.length
  ? firebase.initializeApp(firebaseConfig).firestore()
  : firebase.app().firestore();

const myStack = createStackNavigator({
  Signup: SignupScreen,
  login: LoginScreen
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: "#d9534f",
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  }
})

const mySwitch=createSwitchNavigator({
  Loading: LoadingScreen,
  HomeScreen: HomeScreen,
  stack:myStack
})
export default createAppContainer(mySwitch)