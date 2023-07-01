import { StyleSheet } from 'react-native'
import { theme } from '../../../../constants'

export const styles = StyleSheet.create({
  container: {
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: 5,
    marginVertical: 5,
    backgroundColor: theme.colors.secondary,
    elevation: 5, // Android Shadow
  },
  image: {
    width: '30%',
    height: '100%',
    objectFit: 'cover'
  },
  textContainer: {
    width: '70%',
    alignItems: 'center',
    paddingHorizontal: 10
  },
  name: {
    fontFamily: theme.fonts.bold,
    fontSize: theme.fonts.sizes.medium,
    color: theme.colors.black,
    marginBottom: 5,
    textAlign: 'center'
  },
  address: {
    fontFamily: theme.fonts.regular,
    fontSize: theme.fonts.sizes.small,
    color: theme.colors.black,
    textAlign: 'center'
  }
})
