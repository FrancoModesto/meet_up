import { StyleSheet } from 'react-native'
import { theme } from '../../../constants'

export const styles = StyleSheet.create({
  button: {
    paddingTop: 8,
    paddingBottom: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    elevation: 5, // Android Shadow
  },
  buttonText: {
    fontFamily: theme.fonts.bold,
    fontSize: theme.fonts.sizes.small,
    color: theme.colors.white,
    textAlign: 'center'
  }
})
