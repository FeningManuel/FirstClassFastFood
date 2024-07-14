import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { colors } from './src/global/styles'

import RootNavigator from './src/navigation/RootNavigator'



const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar 
        barStyle= "light-content" 
        backgroundColor = {colors.statusbar}
      />

     <RootNavigator />
      
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {flex:1}
})