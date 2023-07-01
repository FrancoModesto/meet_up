import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { MainScreen } from '../../screens'

import { theme } from '../../../constants'

const stack = createNativeStackNavigator()

const MainNavigator = () => {
  return (
    <stack.Navigator initialRouteName='Main'>
      <stack.Screen name='Main'
        component={MainScreen}
        options={{
          title: 'Meet Up!',
          headerStyle: { backgroundColor: theme.colors.primary, justifyContent: 'center' },
          headerTitleStyle: { fontFamily: theme.fonts.bold, fontSize: theme.fonts.sizes.medium },
          headerTitleAlign: 'center',
          headerTintColor: theme.colors.white
        }} />
    </stack.Navigator>
  )
}

export default MainNavigator
