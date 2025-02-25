import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import MainStackNavigator from './src/components/navigation/MainStackNavigator'
import { NavigationContainer } from '@react-navigation/native'

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
      <MainStackNavigator/>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App

const styles = StyleSheet.create({})