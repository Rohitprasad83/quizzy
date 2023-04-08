import { useEffect, useState } from 'react'
import { StyleSheet, Text, View, BackHandler, Pressable } from 'react-native'
export default function ResultScreen({ navigation, route }) {
  const { correctAnswers, quizData } = route.params
  const [showAnswers, setShowAnswers] = useState(false)
  console.log(route.params)
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

  if (showAnswers) {
    return (
      <View>
        <Text>This will be the Answers</Text>
        <Pressable
          style={styles.reviewButton}
          onPress={() => setShowAnswers(false)}>
          <Text style={styles.reviewButtonText}>Show Score</Text>
        </Pressable>
      </View>
    )
  }

  return (
    <View style={styles.resultContainer}>
      <Text style={styles.resultText}>
        You got {correctAnswers} of 5 answers correct!
      </Text>
      <Pressable
        style={styles.reviewButton}
        onPress={() => setShowAnswers(true)}>
        <Text style={styles.reviewButtonText}>Review Answers</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  resultContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  reviewButton: {
    padding: 10,
    borderRadius: 16,
    backgroundColor: '#071511',
    width: 250,
    marginTop: 20,
  },
  reviewButtonText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
})
