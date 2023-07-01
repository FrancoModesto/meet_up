import { Modal, View, Text } from 'react-native'
import LocationsList from '../LocationsList'
import CustomButton from '../CustomButton'

import { styles } from './styles'
import { theme } from '../../../constants'

const LocationsModal = ({ isVisible, locations, onSelectLocation, onConfirm, emptyText }) => {
  return (
    <Modal visible={isVisible} animationType={'slide'}>
      <View style={styles.container}>
        <Text style={styles.title}>Select some Locations</Text>
        <LocationsList
          locations={locations}
          onSelectLocation={onSelectLocation}
          emptyText={emptyText}
        />
        <CustomButton
          title={'Confirm'}
          onPress={onConfirm}
          style={{ backgroundColor: theme.colors.primary }}
        />
      </View>
    </Modal>
  )
}

export default LocationsModal
