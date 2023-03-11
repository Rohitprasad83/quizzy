import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  ActivityIndicator,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import Question from '../../components/Question'
export default function QuizScreen() {
  const [isLoading, setLoading] = useState(false)
  const [index, setIndex] = useState(0)
  const [data, setData] = useState([])
  const [optionClicked, setOptionClicked] = useState(false)
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

  function extractOptions(arr) {
    const options = [
      arr.correct_answer,
      arr.incorrect_answers[0],
      arr.incorrect_answers[1],
      arr.incorrect_answers[2],
    ]
    return options
  }

  function shuffleOptions(options) {
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[options[i], options[j]] = [options[j], options[i]]
    }
    return options
  }

  function generateOptions(arr) {
    const options = extractOptions(arr)
    // const shuffledOptions = shuffleOptions(options)
    return options
  }

  function getNextIndex() {
    if (index < 4 && optionClicked) {
      setIndex(prev => prev + 1)
      setOptionClicked(false)
    }
  }
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
        <View style={styles.questionContainer}>
          <Question
            question={dummyData[index].question}
            options={generateOptions(dummyData[index])}
            setOptionClicked={setOptionClicked}
            index={index}
          />
          <Pressable
            style={[
              styles.nextButton,
              optionClicked && styles.nextColorIfOptionClicked,
            ]}
            onPress={() => {
              getNextIndex()
            }}>
            <Text style={styles.nextText}>
              {index === 4 ? 'Submit' : 'Next'}
            </Text>
          </Pressable>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 8,
  },
  questionContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  nextButton: {
    borderRadius: 8,
    height: 64,
    marginBottom: 32,
    backgroundColor: '#B5C4CB',
    flexShrink: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextColorIfOptionClicked: {
    backgroundColor: '#ADCD20',
  },
  nextText: {
    fontWeight: 'bold',
    fontSize: 28,
    color: '#071511',
    textAlign: 'center',
  },
})
