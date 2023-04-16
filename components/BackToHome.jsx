import { useNavigation } from '@react-navigation/native'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
export function BackToHome() {
  const navigation = useNavigation()
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
      <MaterialIcons
        name="arrow-back"
        size={30}
        color="black"
        style={{ marginLeft: 10, marginTop: 2 }}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  backButton: {
    backgroundColor: '#FFFFFF',
    color: 'black',
  },
})
