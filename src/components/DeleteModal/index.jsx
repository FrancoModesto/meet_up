import { Modal, View, Text } from 'react-native'
import CustomButton from '../CustomButton'

import { styles } from './styles'
import { theme } from '../../../constants'

const DeleteModal = ({ isVisible, selectedLocation, onCancel, onDelete }) => {
  return (
    <Modal visible={isVisible} animationType={'slide'}>
      <View style={styles.container}>
        <Text style={styles.title}>Location Detail</Text>
        <View style={styles.detailContainer}>
          <Text style={styles.detailMessage}>Are you sure to delete this location?</Text>
          <Text style={styles.selectedLocationName}>"{selectedLocation?.name}"</Text>
          <Text style={styles.selectedLocationAddress}>"{selectedLocation?.address}"</Text>
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton
            title={'Cancel'}
            onPress={onCancel}
            style={{ backgroundColor: theme.colors.secondary }}
          />
          <CustomButton
            title={'Delete'}
            onPress={() => onDelete(selectedLocation.id)}
            style={{ backgroundColor: theme.colors.primary }}
          />
        </View>
      </View>
    </Modal>
  )
}

export default DeleteModal
