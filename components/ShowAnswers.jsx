import { StyleSheet, Text, View, Pressable, FlatList } from 'react-native'
import React from 'react'

export default function ShowAnswers({ data, setShowAnswers }) {
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.question}
      style={styles.answerContainer}
      renderItem={({ item }) => (
        <View style={styles.questionContainer}>
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
  questionContainer: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 4,
    marginVertical: 4,
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
    shadowOpacity: 0.25,
    elevation: 1,
  },
  correctAnswer: {
    backgroundColor: 'rgb(102, 187, 106)',
  },
  incorrectAnswer: {
    backgroundColor: 'rgb(244, 67, 54)',
  },
  reviewButton: {
    padding: 10,
    borderRadius: 16,
    backgroundColor: 'rgb(102, 187, 106)',
    width: 250,
    marginTop: 10,
    alignSelf: 'center',
    marginBottom: 20,
    shadowOpacity: 0.25,
    elevation: 4,
  },
  reviewButtonText: {
    fontSize: 20,
    color: 'rgba(0, 0, 0, 0.87)',
    textAlign: 'center',
  },
})
