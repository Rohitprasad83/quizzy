import {
  StyleSheet,
  Text,
  View,
  Pressable,
  FlatList,
  ScrollView,
} from 'react-native'
import React from 'react'

export default function ShowAnswers({ data }) {
  return (
    <View style={styles.answerContainer}>
      <FlatList
        data={data}
        keyExtractor={item => item.question}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.question}>{item.question}</Text>
            <Text style={[styles.optionStyle, styles.correctAnswer]}>
              {item.correct_answer}
            </Text>
            {item.answerSelected !== item.correct_answer && (
              <Text style={[styles.optionStyle, styles.incorrectAnswer]}>
                {item.answerSelected}
              </Text>
            )}
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  answerContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  optionStyle: {
    fontSize: 16,
    padding: 12,
    borderRadius: 16,
    marginVertical: 8,
  },
  correctAnswer: {
    backgroundColor: '#ADCD20',
  },
  incorrectAnswer: {
    backgroundColor: '#ff0000',
  },
})
