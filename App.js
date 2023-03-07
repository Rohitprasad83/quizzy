import React, { useEffect, useState, Suspense } from 'react'
import { StatusBar } from 'expo-status-bar'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'

const QuizScreen = React.lazy(() => import('./pages/quiz/QuizScreen'))
export default function App() {
  return (
    <View style={styles.container}>
      <Suspense fallback={<ActivityIndicator size="large" color="#00ff00" />}>
        <QuizScreen />
      </Suspense>
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
