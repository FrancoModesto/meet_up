import { StyleSheet } from 'react-native'
import { theme } from '../../../constants'

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontFamily: theme.fonts.regular,
    fontSize: theme.fonts.sizes.small,
    color: theme.colors.black,
    textAlign: 'center'
  }
})
