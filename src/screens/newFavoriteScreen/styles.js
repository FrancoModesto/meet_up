import { StyleSheet } from 'react-native'
import { theme } from '../../../constants'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white
  },
  content: {
    flex: 1,
    padding: 20
  },
  title: {
    fontFamily: theme.fonts.bold,
    fontSize: theme.fonts.sizes.medium,
    color: theme.colors.black
  },
  input: {
    fontFamily: theme.fonts.regular,
    fontSize: theme.fonts.sizes.small,
    color: theme.colors.black,
    borderBottomColor: theme.colors.primary,
    borderBottomWidth: 1,
    padding: 5,
    marginBottom: 20
  },
  button: {
    marginTop: 20
  }
})
