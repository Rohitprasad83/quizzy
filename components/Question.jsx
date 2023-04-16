import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function Question({
  question,
  options,
  index,
  setOptionClicked,
  setAnswerSelected,
}) {
  const [selectedOption, setSelectedOption] = useState(null)

  function handleOptionSelected(option) {
    setOptionClicked(true)
    setSelectedOption(option)
    setAnswerSelected(option)
  }

  return (
    <View style={styles.questionContainer}>
      <Text style={styles.heading}>Question {index + 1} of 5</Text>
      <Text style={styles.question}>{question}</Text>
      <Pressable
        style={[
          styles.option,
          selectedOption === options[0] && styles.selectedOptionStyle,
        ]}
        onPress={() => handleOptionSelected(options[0])}>
        <Text style={styles.optionText}>{options[0]}</Text>
      </Pressable>
      <Pressable
        style={[
          styles.option,
          selectedOption === options[1] && styles.selectedOptionStyle,
        ]}
        onPress={() => handleOptionSelected(options[1])}>
        <Text style={styles.optionText}>{options[1]}</Text>
      </Pressable>
      <Pressable
        style={[
          styles.option,
          selectedOption === options[2] && styles.selectedOptionStyle,
        ]}
        onPress={() => handleOptionSelected(options[2])}>
        <Text style={styles.optionText}>{options[2]}</Text>
      </Pressable>
      <Pressable
        style={[
          styles.option,
          selectedOption === options[3] && styles.selectedOptionStyle,
        ]}
        onPress={() => handleOptionSelected(options[3])}>
        <Text style={styles.optionText}>{options[3]}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  questionContainer: {
    // flex: 1,
  },
  heading: {
    fontWeight: 'normal',
    fontSize: 18,
  },
  question: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#4B5955',
    marginVertical: 16,
  },
  option: {
    borderColor: '#7A8573',
    paddingVertical: 20,
    paddingHorizontal: 8,
    fontSize: 16,
    color: '#4B5955',
    borderRadius: 18,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 4,
  },
  optionText: {
    fontSize: 18,
  },
  selectedOptionStyle: {
    backgroundColor: 'rgb(144, 202, 249)',
  },
})
