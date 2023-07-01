import { getCurrentPositionAsync, requestForegroundPermissionsAsync } from 'expo-location'
import { useEffect, useState } from 'react'
import { View, Text, Alert } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import MapPreview from '../MapPreview'
import CustomButton from '../CustomButton'

import { styles } from './styles'
import { theme } from '../../../constants'

const LocationSelector = ({ onLocation }) => {
  const navigation = useNavigation()
  const route = useRoute()

  const { mapLocation } = route.params || {}
  const [pickedLocation, setPickedLocation] = useState(null)

  const verifyLocationPermissions = async () => {
    const { status } = await requestForegroundPermissionsAsync()
    if (status !== 'granted') {
      Alert.alert('Permission denied', 'We need permissions to access the location', [{ text: 'Ok' }])
      return false
    }

    return true
  }

  const onSelectLocation = async () => {
    const hasLocationPermission = await verifyLocationPermissions()
    if (!hasLocationPermission) return

    const location = await getCurrentPositionAsync({
      accuracy: 6,
      timeout: 5000
    })

    const { latitude, longitude } = location.coords

    navigation.navigate('Maps', { coords: { lat: latitude, lon: longitude } })
  }

  useEffect(() => {
    if (mapLocation) {
      setPickedLocation(mapLocation)
      onLocation(mapLocation)
    }
  }, [mapLocation])

  return (
    <View style={styles.container}>
      <MapPreview location={pickedLocation} style={styles.preview}>
        <Text style={styles.text}>No Location Selected</Text>
      </MapPreview>
      <CustomButton
        title={'Select Location'}
        onPress={onSelectLocation}
        style={{ backgroundColor: theme.colors.primary }}
      />
    </View>
  )
}

export default LocationSelector
