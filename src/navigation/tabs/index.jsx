import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MainNavigator from '../main'
import FavoritesNavigator from '../favorites'

import Ionicons from '@expo/vector-icons/Ionicons'
import { theme } from '../../../constants'

const BottomTab = createBottomTabNavigator()

const TabsNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName='MainTab'
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.white,
        tabBarInactiveTintColor: theme.colors.secondary,
        tabBarStyle: {
          backgroundColor: theme.colors.primary,
          borderTopWidth: 0,
          height: 70,
          paddingBottom: 10,
          paddingTop: 10
        },
        tabBarLabelStyle: {
          fontFamily: theme.fonts.regular,
          fontSize: theme.fonts.sizes.small
        }
      }}>

      <BottomTab.Screen
        name='MainTab'
        component={MainNavigator}
        options={{
          tabBarLabel: 'Meet Up!',
          tabBarIcon: ({ focused, color }) => (
            <Ionicons name={focused ? 'map' : 'map-outline'} size={theme.fonts.sizes.large} color={color} />
          )
        }}
      />

      <BottomTab.Screen
        name='FavoritesTab'
        component={FavoritesNavigator}
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: ({ focused, color }) => (
            <Ionicons name={focused ? 'heart' : 'heart-outline'} size={theme.fonts.sizes.large} color={color} />
          )
        }}
      />

    </BottomTab.Navigator>
  )
}

export default TabsNavigator
