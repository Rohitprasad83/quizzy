import { useEffect, useState } from 'react'
import { StyleSheet, Text, View, BackHandler, Pressable } from 'react-native'
import ShowAnswers from '../../components/ShowAnswers'
export default function ResultScreen({ navigation, route }) {
  const { correctAnswers, quizData } = route.params
  const [showAnswers, setShowAnswers] = useState(false)
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
    return <ShowAnswers data={quizData} setShowAnswers={setShowAnswers} />
  }

  return (
    <View style={styles.resultContainer}>
      <Text style={styles.resultText}>
        You got {correctAnswers} of 5 answers correct!
      </Text>
      <Pressable
        style={[styles.Button, styles.reviewButton]}
        onPress={() => setShowAnswers(true)}>
        <Text style={styles.buttonText}>Review Answers</Text>
      </Pressable>
      <Pressable
        style={[styles.Button, styles.playMoreButton]}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Play More</Text>
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
  Button: {
    padding: 10,
    borderRadius: 16,
    width: 250,
    marginTop: 10,
  },
  reviewButton: {
    backgroundColor: 'rgb(102, 187, 106)',
  },
  buttonText: {
    fontSize: 20,
    color: 'rgba(0, 0, 0, 0.87)',
    textAlign: 'center',
  },
  playMoreButton: {
    backgroundColor: 'rgb(144, 202, 249)',
  },
})
