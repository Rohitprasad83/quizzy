import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  ActivityIndicator,
} from 'react-native'
import React, { useEffect, useState } from 'react'

export default function QuizScreen() {
  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState([])

  const getQuizQuestions = async () => {
    try {
      const response = await fetch(
        'https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple'
      )
      const data = await response.json()
      console.log(data.results)
      setLoading(false)
      setData(data.results)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    getQuizQuestions()
  }, [])
  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={item => item.question}
          renderItem={({ item, index }) => (
            <View>
              <Text>
                QUESTION {index + 1} OF {5}
              </Text>
              <Text>{item.question}</Text>
              <Pressable>
                <Text>{item.correct_answer}</Text>
              </Pressable>
              <Pressable>
                <Text>{item.incorrect_answers[0]}</Text>
              </Pressable>
              <Pressable>
                <Text>{item.incorrect_answers[1]}</Text>
              </Pressable>
              <Pressable>
                <Text>{item.incorrect_answers[2]}</Text>
              </Pressable>
            </View>
          )}
        />
        // <Text>Will render list</Text>
      )}
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
