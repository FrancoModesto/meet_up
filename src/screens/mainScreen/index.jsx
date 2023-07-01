import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View } from 'react-native'
import { CustomButton, LocationsModal, LocationsList, FinalModal } from '../../components'
import { getFavoriteLocations } from '../../store/favoriteLocation.slice'
import { findClosestOfAll } from '../../utils'

import { styles } from './styles'
import { theme } from '../../../constants'

const MainScreen = () => {
  const dispatch = useDispatch()
  const favoriteLocations = useSelector((state) => state.favoriteLocation.data)

  const [modalLocationsVisible, setModalLocationsVisible] = useState(false)
  const [modalFinalVisible, setModalFinalVisible] = useState(false)

  const [nonSelectedLocations, setNonSelectedLocations] = useState([])
  const [selectedLocations, setSelectedLocations] = useState([])

  const [finalLocationData, setFinalLocationData] = useState(null)

  const onPressToSelect = () => {
    setModalLocationsVisible(!modalLocationsVisible)
  }

  const onSelectLocation = (id) => {
    const selectedLocation = favoriteLocations.find((location) => location.id === id)
    setSelectedLocations([...selectedLocations, selectedLocation])

    const newNonSelectedLocations = nonSelectedLocations.filter((location) => location.id !== id)
    setNonSelectedLocations(newNonSelectedLocations)
  }

  const onConfirmModalLocations = () => {
    setModalLocationsVisible(!modalLocationsVisible)
  }

  const onRemoveLocation = (id) => {
    const newSelectedLocations = selectedLocations.filter((location) => location.id !== id)
    setSelectedLocations(newSelectedLocations)

    const location = favoriteLocations.find((location) => location.id === id)
    if (location) {
      setNonSelectedLocations([...nonSelectedLocations, location])
    }
  }

  const onMeetUp = () => {
    const { id, average } = findClosestOfAll(selectedLocations)
    const location = selectedLocations.find((location) => location.id === id)
    setFinalLocationData({ location, average })
    setModalFinalVisible(!modalFinalVisible)
  }

  const onConfirmModalFinal = () => {
    setSelectedLocations([])
    setNonSelectedLocations(favoriteLocations)
    setModalFinalVisible(!modalFinalVisible)
    setFinalLocationData(null)
  }

  useEffect(() => {
    dispatch(getFavoriteLocations()).unwrap()
  }, [dispatch])

  useEffect(() => {
    if (favoriteLocations.length > 0) {
      const newNonSelectedLocations = favoriteLocations.filter((location) => !selectedLocations.includes(location))
      setNonSelectedLocations(newNonSelectedLocations)
    } else {
      setNonSelectedLocations([])
    }
  }, [favoriteLocations])

  return (
    <View style={styles.container}>
      <CustomButton
        title={'Select Locations'}
        onPress={onPressToSelect}
        style={{ backgroundColor: theme.colors.primary }}
      />
      <LocationsList
        locations={selectedLocations}
        onSelectLocation={onRemoveLocation}
        emptyText={'No Selected Locations Yet'}
      />
      <CustomButton
        disabled={selectedLocations.length > 1 ? false : true}
        title={'Meet Up!'}
        onPress={onMeetUp}
        style={selectedLocations.length > 1 ? { backgroundColor: theme.colors.primary } : { backgroundColor: theme.colors.primary, opacity: 0.5 }}
      />
      <LocationsModal
        isVisible={modalLocationsVisible}
        locations={nonSelectedLocations}
        onSelectLocation={onSelectLocation}
        onConfirm={onConfirmModalLocations}
        emptyText={'Add a Favorite Location First'}
      />
      <FinalModal
        isVisible={modalFinalVisible}
        data={finalLocationData}
        onConfirm={onConfirmModalFinal}
      />
    </View>
  )
}

export default MainScreen
