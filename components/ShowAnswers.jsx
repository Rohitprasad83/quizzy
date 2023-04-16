import { StyleSheet, Text, View, Pressable, FlatList } from 'react-native'
import React from 'react'

export default function ShowAnswers({ data, setShowAnswers }) {
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.question}
      style={styles.answerContainer}
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
      ListFooterComponent={() => (
        <Pressable
          style={styles.reviewButton}
          onPress={() => setShowAnswers(false)}>
          <Text style={styles.reviewButtonText}>Show Score</Text>
        </Pressable>
      )}
    />
  )
}

const styles = StyleSheet.create({
  answerContainer: {
    marginHorizontal: 8,
    flex: 1,
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
  reviewButton: {
    padding: 10,
    borderRadius: 16,
    backgroundColor: '#071511',
    width: 250,
    marginTop: 10,
  },
  reviewButtonText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
})
