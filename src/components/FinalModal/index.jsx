import { Modal, View, Text } from 'react-native'
import CustomButton from '../CustomButton'

import { styles } from './styles'
import { theme } from '../../../constants'

const FinalModal = ({ isVisible, data, onConfirm }) => {
  const { location, average } = data || {}

  return (
    <Modal visible={isVisible} animationType={'slide'}>
      <View style={styles.container}>
        <Text style={styles.title}>Location with the Lowest Average Distance to the others:</Text>
        <View style={styles.detailContainer}>
          <Text style={styles.name}>"{location?.name}"</Text>
          <Text style={styles.address}>"{location?.address}"</Text>
          <Text style={styles.averageContainer}>Average Distance: <Text style={styles.average}>{average}</Text>km</Text>
        </View>
        <CustomButton
          title={"Let's Meet Up!"}
          onPress={onConfirm}
          style={{ backgroundColor: theme.colors.primary }}
        />
      </View>
    </Modal>
  )
}

export default FinalModal
