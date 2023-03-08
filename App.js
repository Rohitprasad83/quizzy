import React, { useEffect, useState, Suspense } from 'react'
import { StatusBar } from 'expo-status-bar'
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  Platform,
  SafeAreaView,
} from 'react-native'
import QuizScreen from './pages/quiz/QuizScreen'
import CategoriesScreen from './pages/categories/CategoriesScreen'
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <QuizScreen /> */}
      <CategoriesScreen />
      <StatusBar style="auto" />
    </SafeAreaView>
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
