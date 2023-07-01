import { TouchableOpacity } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { FavoritesScreen, NewFavoriteScreen, MapsScreen } from '../../screens'

import Ionicons from '@expo/vector-icons/Ionicons'
import { theme } from '../../../constants'

const stack = createNativeStackNavigator()

const FavoritesNavigator = () => {
  return (
    <stack.Navigator
      initialRouteName='Favorites'
      screenOptions={{
        headerStyle: { backgroundColor: theme.colors.primary, justifyContent: 'center' },
        headerTitleStyle: { fontFamily: theme.fonts.bold, fontSize: theme.fonts.sizes.medium },
        headerTitleAlign: 'center',
        headerTintColor: theme.colors.white
      }}>
      <stack.Screen name='Favorites'
        component={FavoritesScreen}
        options={({ navigation }) => ({
          title: 'Favorites',
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('NewFavorite')}>
              <Ionicons name='add-circle-outline' size={theme.fonts.sizes.larger} color={theme.colors.white} />
            </TouchableOpacity>
          )
        })} />
      <stack.Screen name='NewFavorite'
        component={NewFavoriteScreen}
        options={{
          title: 'New Location',
        }} />
      <stack.Screen name="Maps"
        component={MapsScreen}
        options={{
          title: "Map"
        }} />
    </stack.Navigator>
  )
}

export default FavoritesNavigator
