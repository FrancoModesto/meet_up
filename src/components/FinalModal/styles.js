import { StyleSheet } from 'react-native'
import { theme } from '../../../constants'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 40,
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: theme.colors.white
  },
  title: {
    fontFamily: theme.fonts.bold,
    fontSize: theme.fonts.sizes.large,
    color: theme.colors.black,
    textAlign: 'center'
  },
  detailContainer: {
    gap: 20
  },
  name: {
    fontFamily: theme.fonts.bold,
    fontSize: theme.fonts.sizes.large,
    color: theme.colors.primary,
    textAlign: 'center'
  },
  address: {
    fontFamily: theme.fonts.regular,
    fontSize: theme.fonts.sizes.small,
    color: theme.colors.black,
    textAlign: 'center'
  },
  averageContainer: {
    fontFamily: theme.fonts.bold,
    fontSize: theme.fonts.sizes.medium,
    color: theme.colors.black,
    textAlign: 'center',
    paddingVertical: 20
  },
  average: {
    fontFamily: theme.fonts.bold,
    fontSize: theme.fonts.sizes.medium,
    color: theme.colors.primary,
    textAlign: 'center'
  }
})
