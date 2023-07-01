import { View } from 'react-native'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { LocationsList, DeleteModal } from '../../components'
import { removeFavoriteLocation } from '../../store/favoriteLocation.slice'

import { styles } from './styles'

const FavoritesScreen = () => {
  const dispatch = useDispatch()
  const favoriteLocations = useSelector((state) => state.favoriteLocation.data)

  const [modalVisible, setModalVisible] = useState(false)
  const [selectedLocation, setSelectedLocation] = useState(null)

  const onSelectLocation = (id) => {
    setModalVisible(!modalVisible)
    const selectedLocation = favoriteLocations.find(location => location.id === id)
    setSelectedLocation(selectedLocation)
  }

  const onCancelModal = () => {
    setModalVisible(!modalVisible)
    setSelectedLocation(null)
  }

  const onDeleteLocation = (id) => {
    dispatch(removeFavoriteLocation(id)).unwrap()
    setModalVisible(!modalVisible)
    setSelectedLocation(null)
  }

  return (
    <View style={styles.container}>
      <LocationsList
        locations={favoriteLocations}
        onSelectLocation={onSelectLocation}
        emptyText={'No Favorite Locations Yet'}
      />
      <DeleteModal
        isVisible={modalVisible}
        onCancel={onCancelModal}
        onDelete={onDeleteLocation}
        selectedLocation={selectedLocation}
      />
    </View>
  )
}

export default FavoritesScreen
