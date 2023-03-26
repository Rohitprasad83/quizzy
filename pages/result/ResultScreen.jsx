import { useEffect } from 'react'
import { StyleSheet, Text, View, BackHandler } from 'react-native'
export default function ResultScreen({ navigation, route }) {
  const { correctAnswers } = route.params
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        navigation.navigate('Home')
        return true
      }
    )

    return () => backHandler.remove()
  }, [navigation])
  return (
    <View style={styles.resultContainer}>
      <Text style={styles.resultText}>
        You got {correctAnswers} of 5 answers correct!
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  resultContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  resultText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
})
