import { useNavigation } from '@react-navigation/native'
import { View, Button } from 'react-native'
export function BackToHome() {
  const navigation = useNavigation()
  return (
    <View>
      <Button onPress={() => navigation.navigate('Home')} title="<-" />
    </View>
  )
}
