import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function Question({ question, options, index }) {
  console.log(options)
  return (
    <View style={styles.questionContainer}>
      <Text>Question {index + 1} of 5</Text>
      <Text style={styles.question}>{question}</Text>
      <Pressable style={styles.option}>
        <Text>{options[0]}</Text>
      </Pressable>
      <Pressable style={styles.option}>
        <Text>{options[1]}</Text>
      </Pressable>
      <Pressable style={styles.option}>
        <Text>{options[2]}</Text>
      </Pressable>
      <Pressable style={styles.option}>
        <Text>{options[3]}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  questionContainer: {
    flex: 1,
    paddingHorizontal: 32,
  },
  question: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#4B5955',
    marginVertical: 16,
  },
  option: {
    borderWidth: 1,
    borderColor: '#7A8573',
    padding: 16,
    fontSize: 16,
    color: '#4B5955',
  },
})
