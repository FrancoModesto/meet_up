import { TouchableOpacity, Text } from 'react-native'

import { styles } from './styles'

const CustomButton = ({ title, onPress, style, disabled }) => {
  return (
    <TouchableOpacity disabled={disabled} style={{ ...styles.button, ...style }} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton
