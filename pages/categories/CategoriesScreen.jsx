import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import {
  Octicons,
  Entypo,
  MaterialIcons,
  FontAwesome5,
} from '@expo/vector-icons'
export default function CategoriesScreen({ navigation }) {
  const catgeories = [
    {
      name: 'Mathematics',
      icon: (
        <Octicons
          name="number"
          size={30}
          color="black"
          style={{ marginLeft: 6 }}
        />
      ),
    },
    {
      name: 'Computers',
      icon: <MaterialIcons name="computer" size={30} color="black" />,
    },
    {
      name: 'Animals',
      icon: <FontAwesome5 name="dog" size={30} color="black" />,
    },
    {
      name: 'General Knowledge',
      icon: <Entypo name="book" size={30} color="black" />,
    },
    {
      name: 'Science and Nature',
      icon: <MaterialIcons name="science" size={30} color="black" />,
    },
  ]
  return (
    <View style={styles.categoryContainer}>
      <Text style={{ fontSize: 20, textAlign: 'center', marginBottom: 30 }}>
        Choose your category to play the quiz!
      </Text>
      <FlatList
        data={catgeories}
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
          <View style={styles.category}>
            <Pressable
              onPress={() =>
                navigation.navigate('Quiz', {
                  quizType: item.text,
                })
              }
              style={styles.categoryItem}>
              <View style={styles.categoryIcon}>{item.icon}</View>
              <Text style={styles.categoryText}>{item.name}</Text>
            </Pressable>
          </View>
        )}
      />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  categoryContainer: {
    marginTop: 20,
  },
  category: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 12,
    borderWidth: 1,
    borderColor: '#B5C4CB',
    marginVertical: 8,
    borderRadius: 16,
    padding: 20,
  },
  categoryItem: {
    flex: 1,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  categoryText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  categoryIcon: {
    width: 40,
    padding: 2,
  },
})
