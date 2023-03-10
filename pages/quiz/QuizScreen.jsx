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
  const dummyData = [
    {
      category: 'Science: Computers',
      correct_answer: '&#039;For&#039; loops',
      difficulty: 'easy',
      incorrect_answers: [
        '&#039;If&#039; Statements',
        '&#039;Do-while&#039; loops',
        '&#039;While&#039; loops',
      ],
      question:
        'In any programming language, what is the most common way to iterate through an array?',
      type: 'multiple',
    },
    {
      category: 'Science: Computers',
      correct_answer: 'Nougat',
      difficulty: 'easy',
      incorrect_answers: ['Ice Cream Sandwich', 'Jelly Bean', 'Marshmallow'],
      question:
        'What is the code name for the mobile operating system Android 7.0?',
      type: 'multiple',
    },
    {
      category: 'Science: Computers',
      correct_answer: '256',
      difficulty: 'easy',
      incorrect_answers: ['8', '1', '1024'],
      question: 'How many values can a single byte represent?',
      type: 'multiple',
    },
    {
      category: 'Science: Computers',
      correct_answer: '128 bits',
      difficulty: 'easy',
      incorrect_answers: ['32 bits', '64 bits', '128 bytes'],
      question: 'How long is an IPv6 address?',
      type: 'multiple',
    },
    {
      category: 'Science: Computers',
      correct_answer: 'Java Virtual Machine',
      difficulty: 'easy',
      incorrect_answers: [
        'Java Vendor Machine',
        'Java Visual Machine',
        'Just Virtual Machine',
      ],
      question: 'What does the computer software acronym JVM stand for?',
      type: 'multiple',
    },
  ]
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
    // getQuizQuestions()
  }, [])
  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={dummyData}
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
