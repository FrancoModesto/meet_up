import { View, SafeAreaView, ActivityIndicator } from 'react-native'
import Navigation from './navigation'
import { Provider } from 'react-redux'
import { store } from './store'
import { init } from './db'

import { useFonts } from 'expo-font'
import { styles } from './styles'
import { theme } from '../constants'

init()
  .then(() => {
    console.log('Initialized Database')
  })
  .catch((err) => {
    console.log('Initializing Database Failed')
    console.log(err)
  })

export default function App() {
  const [loadedFonts] = useFonts({
    'Comfortaa-Regular': require('../assets/fonts/Comfortaa-Regular.ttf'),
    'Comfortaa-Bold': require('../assets/fonts/Comfortaa-Bold.ttf')
  })

  if (!loadedFonts) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size='large' color={theme.colors.primary} />
      </View>
    )
  }

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <Navigation />
      </SafeAreaView>
    </Provider>
  )
}
