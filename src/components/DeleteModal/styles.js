import { StyleSheet } from 'react-native'
import { theme } from '../../../constants'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: theme.colors.white
  },
  title: {
    fontFamily: theme.fonts.bold,
    fontSize: theme.fonts.sizes.larger,
    color: theme.colors.primary,
    textAlign: 'center'
  },
  detailContainer: {
    paddingVertical: 20
  },
  detailMessage: {
    fontFamily: theme.fonts.regular,
    fontSize: theme.fonts.sizes.medium,
    color: theme.colors.black,
    textAlign: 'center'
  },
  selectedLocationName: {
    fontFamily: theme.fonts.bold,
    fontSize: theme.fonts.sizes.medium,
    color: theme.colors.primary,
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 10
  },
  selectedLocationAddress: {
    fontFamily: theme.fonts.regular,
    fontSize: theme.fonts.sizes.small,
    color: theme.colors.black,
    textAlign: 'center',
    marginBottom: 40
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})
