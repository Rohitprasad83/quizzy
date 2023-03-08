import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function CategoriesScreen() {
  const catgeories = [
    'Mathematics',
    'Computers',
    'Animals',
    'General Knowledge',
    'Science and Nature',
  ]
  return (
    <View>
      <FlatList
        data={catgeories}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <View style={styles.category}>
            <Pressable>
              <Text>{item}</Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  category: {
    flex: 1,
    backgroundColor: '#fff',
    fontSize: 36,
    borderWidth: 2,
    borderColor: 'grey',
    marginVertical: 8,
    borderRadius: 16,
    padding: 16,
  },
})
