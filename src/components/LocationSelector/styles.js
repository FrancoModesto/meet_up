import { StyleSheet } from 'react-native'
import { theme } from '../../../constants'

export const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  preview: {
    width: '100%',
    height: 200,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: theme.colors.primary,
    borderWidth: 1
  },
  text: {
    fontFamily: theme.fonts.regular,
    fontSize: theme.fonts.sizes.small,
    color: theme.colors.black,
    textAlign: 'center',
    paddingHorizontal: 20
  }
})
