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
export default function QuizScreen({ navigation, route }) {
  const [isLoading, setLoading] = useState(false)
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
      generatedOptions: [
        '&#039;If&#039; Statements',
        '&#039;If&#039; Statements',
        '&#039;If&#039; Statements',
        '&#039;If&#039; Statements',
      ],
    },
    {
      category: 'Science: Computers',
      correct_answer: 'Nougat',
      difficulty: 'easy',
      incorrect_answers: ['Ice Cream Sandwich', 'Jelly Bean', 'Marshmallow'],
      question:
        'What is the code name for the mobile operating system Android 7.0?',
      type: 'multiple',
      generatedOptions: [
        '&#039;If&#039; Statements',
        '&#039;If&#039; Statements',
        '&#039;If&#039; Statements',
        '&#039;If&#039; Statements',
      ],
    },
    {
      category: 'Science: Computers',
      correct_answer: '256',
      difficulty: 'easy',
      incorrect_answers: ['8', '1', '1024'],
      question: 'How many values can a single byte represent?',
      type: 'multiple',
      generatedOptions: [
        '&#039;If&#039; Statements',
        '&#039;If&#039; Statements',
        '&#039;If&#039; Statements',
        '&#039;If&#039; Statements',
      ],
    },
    {
      category: 'Science: Computers',
      correct_answer: '128 bits',
      difficulty: 'easy',
      incorrect_answers: ['32 bits', '64 bits', '128 bytes'],
      question: 'How long is an IPv6 address?',
      type: 'multiple',
      generatedOptions: [
        '&#039;If&#039; Statements',
        '&#039;If&#039; Statements',
        '&#039;If&#039; Statements',
        '&#039;If&#039; Statements',
      ],
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
      generatedOptions: [
        '&#039;If&#039; Statements',
        '&#039;If&#039; Statements',
        '&#039;If&#039; Statements',
        '&#039;If&#039; Statements',
      ],
    },
  ]
  const [index, setIndex] = useState(0)
  const [data, setData] = useState(dummyData)
  const [optionClicked, setOptionClicked] = useState(false)
  const [answerSelected, setAnswerSelected] = useState('')
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0)

  const APIS = {
    Mathematics: 'https://quizzybackend-nd25.onrender.com/mathematics',
    Computers: 'https://quizzybackend-nd25.onrender.com/computers',
    Animals: 'https://quizzybackend-nd25.onrender.com/animals',
    'General Knowledge':
      'https://quizzybackend-nd25.onrender.com/generalknowledge',
    'Science and Nature': 'https://quizzybackend-nd25.onrender.com/nature',
  }

  const { quizType } = route.params
  function shuffleOptions(options) {
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[options[i], options[j]] = [options[j], options[i]]
    }
    return options
  }

  function getNextIndex() {
    if (index < 4 && optionClicked) {
      setIndex(prev => prev + 1)
      setOptionClicked(false)
    }
  }
  const getQuizQuestions = async quizType => {
    setLoading(true)
    try {
      const url = APIS[quizType]
      const response = await fetch(url)
      const data = await response.json()
      let transformedData = data.data
      transformedData.forEach(item => {
        item.generatedOptions = [item.correct_answer, ...item.incorrect_answers]
      })

      transformedData.forEach(item => {
        item.generatedOptions = shuffleOptions(item.generatedOptions)
      })
      setData(transformedData)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  function handleNextButtonClick(source) {
    let currentCorrectAnswerCount = correctAnswerCount
    const dataWithSelectedOption = data
    dataWithSelectedOption[index].answerSelected = answerSelected
    setData(dataWithSelectedOption)
    if (answerSelected === data[index].correct_answer) {
      currentCorrectAnswerCount = currentCorrectAnswerCount + 1
      setCorrectAnswerCount(currentCorrectAnswerCount)
    }
    if (source.type === 'submit') {
      navigation.navigate('Result', {
        correctAnswers: currentCorrectAnswerCount,
        quizData: data,
      })
    }
  }
  useEffect(() => {
    getQuizQuestions(quizType)
  }, [quizType])
  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator
          color="rgb(144, 202, 249)"
          style={styles.activityIndicator}
        />
      ) : (
        <View style={styles.questionContainer}>
          <Question
            question={data[index].question}
            options={data[index].generatedOptions}
            setOptionClicked={setOptionClicked}
            setAnswerSelected={setAnswerSelected}
            index={index}
          />
          {index === 4 ? (
            <Pressable
              style={[
                styles.nextButton,
                optionClicked && styles.nextColorIfOptionClicked,
              ]}
              onPress={() => handleNextButtonClick({ type: 'submit' })}>
              <Text style={styles.nextText}>Submit</Text>
            </Pressable>
          ) : (
            <Pressable
              style={[
                styles.nextButton,
                optionClicked && styles.nextColorIfOptionClicked,
              ]}
              onPress={() => {
                handleNextButtonClick({ type: 'next' })
                getNextIndex()
              }}>
              <Text style={styles.nextText}>
                {index === 4 ? 'Submit' : 'Next'}
              </Text>
            </Pressable>
          )}
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  activityIndicator: {
    flex: 1,
    alignSelf: 'center',
    transform: [{ scaleX: 4 }, { scaleY: 4 }],
  },
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
    backgroundColor: 'rgb(144, 202, 249)',
  },
  nextText: {
    fontWeight: 'bold',
    fontSize: 28,
    color: '#071511',
    textAlign: 'center',
  },
})
