import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator,TransitionPresets } from '@react-navigation/stack'
import SignInScreen from '../Screens/authScreens/SignInScreen';
import SignInWelcomeScreen from '../Screens/authScreens/SignInWelcomeScreen';
import HomeScreen from '../Screens/HomeScreen';

const AuthStack = createStackNavigator();
const authNavigators = () => {
  return (
    <AuthStack.Navigator>
        <AuthStack.Screen
           name = "SignInWelcomeScreen"
           component={SignInWelcomeScreen}
           options={{
            headerShown: false,
            ...TransitionPresets.RevealFromBottomAndroid
           }}
        /> 
        <AuthStack.Screen
           name = "SignInScreen"
           component={SignInScreen}
           options={{
            headerShown: false,
            ...TransitionPresets.RevealFromBottomAndroid
           }}
        /> 
        <AuthStack.Screen
           name = "HomeScreen"
           component={HomeScreen}
           options={{
            headerShown: false,
            ...TransitionPresets.RevealFromBottomAndroid
           }}
        /> 
    </AuthStack.Navigator>      
  )
}

export default authNavigators

const styles = StyleSheet.create({})