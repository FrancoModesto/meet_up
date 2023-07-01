import { StyleSheet } from 'react-native'
import { theme } from '../../../constants'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    gap: 20,
    paddingVertical: 30,
    paddingHorizontal: 20,
    backgroundColor: theme.colors.white
  },
  title: {
    fontFamily: theme.fonts.bold,
    fontSize: theme.fonts.sizes.large,
    color: theme.colors.black,
    textAlign: 'center'
  }
})
