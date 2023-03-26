import React, { useEffect, useState, Suspense } from 'react'
import { StyleSheet, Button } from 'react-native'
import QuizScreen from './pages/quiz/QuizScreen'
import CategoriesScreen from './pages/categories/CategoriesScreen'
import ResultScreen from './pages/result/ResultScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { BackToHome } from './components/BackToHome'
export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={CategoriesScreen} />
        <Stack.Screen name="Quiz" component={QuizScreen} />
        <Stack.Screen
          name="Result"
          component={ResultScreen}
          options={{
            headerLeft: () => <BackToHome />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
})
