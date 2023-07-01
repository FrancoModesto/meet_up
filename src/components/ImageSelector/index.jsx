import { requestCameraPermissionsAsync, requestMediaLibraryPermissionsAsync, launchCameraAsync, launchImageLibraryAsync } from 'expo-image-picker'
import { useState } from 'react'
import { View, Text, Image, Alert } from 'react-native'
import CustomButton from '../CustomButton'

import { styles } from './styles'
import { theme } from '../../../constants'

const ImageSelector = ({ onImage }) => {
  const [pickedUrl, setPickedUrl] = useState('')

  const verifyCameraPermissions = async () => {
    const { status } = await requestCameraPermissionsAsync()

    if (status !== 'granted') {
      Alert.alert('Permission denied', 'We need permissions to use the camera', [{ text: 'Ok' }])
      return false
    }

    return true
  }

  const verifyGalleryPermissions = async () => {
    const { status } = await requestMediaLibraryPermissionsAsync()

    if (status !== 'granted') {
      Alert.alert('Permission denied', 'We need permissions to access the gallery', [{ text: 'Ok' }])
      return false
    }

    return true
  }

  const handlePictureTake = async () => {
    const hasCameraPermission = await verifyCameraPermissions()
    if (!hasCameraPermission) return

    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.7,
    })

    if (!image.canceled) {
      setPickedUrl(image.assets[0].uri)
      onImage(image.assets[0].uri)
    }
  }

  const handleImageSelect = async () => {
    const hasGalleryPermission = await verifyGalleryPermissions()
    if (!hasGalleryPermission) return

    const image = await launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.7,
    })

    if (!image.canceled) {
      setPickedUrl(image.assets[0].uri)
      onImage(image.assets[0].uri)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.preview}>
        {
          !pickedUrl ?
            (
              <Text style={styles.text}>No Image Selected</Text>
            )
            :
            (
              <Image style={styles.image} source={{ uri: pickedUrl }} />
            )
        }
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          title={'Take Picture'}
          onPress={handlePictureTake}
          style={{ backgroundColor: theme.colors.primary }}
        />
        <CustomButton
          title={'Select Image'}
          onPress={handleImageSelect}
          style={{ backgroundColor: theme.colors.primary }}
        />
      </View>
    </View>
  )
}

export default ImageSelector
