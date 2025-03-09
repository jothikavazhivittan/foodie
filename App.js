import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import MainStackNavigator from './src/components/navigation/MainStackNavigator'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import store from './src/redux/store/store'

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
      <NavigationContainer>
      <MainStackNavigator/>
      </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  )
}

export default App

const styles = StyleSheet.create({})