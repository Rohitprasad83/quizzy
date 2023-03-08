import React, { useEffect, useState, Suspense } from 'react'
import { StatusBar } from 'expo-status-bar'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import QuizScreen from './pages/quiz/QuizScreen'
export default function App() {
  return (
    <View style={styles.container}>
      <QuizScreen />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
