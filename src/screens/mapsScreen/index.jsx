import { useState, useLayoutEffect } from 'react'
import { TouchableOpacity } from 'react-native'
import MapView, { Marker } from 'react-native-maps'

import Ionicons from '@expo/vector-icons/Ionicons'
import { styles } from './styles'
import { theme } from '../../../constants'

const MapsScreen = ({ navigation, route }) => {
  const { coords } = route.params
  const [selectedLocation, setSelectedLocation] = useState(null)

  const initialRegion = {
    latitude: coords?.lat,
    longitude: coords?.lon,
    latitudeDelta: 0.0922, // ?
    longitudeDelta: 0.0421 // ?
  }

  const onPickLocation = (event) => {
    setSelectedLocation({
      lat: event.nativeEvent.coordinate.latitude,
      lon: event.nativeEvent.coordinate.longitude
    })
  }

  const onSaveLocation = () => {
    if (selectedLocation) {
      navigation.navigate('NewFavorite', { mapLocation: selectedLocation })
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity disabled={!selectedLocation} onPress={onSaveLocation}>
          <Ionicons name="md-save-sharp" size={theme.fonts.sizes.large} color={theme.colors.white} style={!selectedLocation ? { opacity: 0.5 } : null} />
        </TouchableOpacity>
      )
    })
  })

  return (
    <MapView
      style={styles.container}
      initialRegion={initialRegion}
      onPress={onPickLocation}
      minZoomLevel={14}>
      {
        selectedLocation ? (
          <Marker
            coordinate={{
              latitude: selectedLocation?.lat,
              longitude: selectedLocation?.lon
            }}
          />
        ) : null
      }
    </MapView>
  )
}

export default MapsScreen
