import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { View, ScrollView, Text, TextInput } from 'react-native'
import { ImageSelector, LocationSelector, CustomButton } from '../../components'
import { addFavoriteLocation } from '../../store/favoriteLocation.slice'

import { styles } from './styles'
import { theme } from '../../../constants'

const NewFavoriteScreen = ({ navigation }) => {
  const dispatch = useDispatch()

  const [text, setText] = useState('')
  const [image, setImage] = useState('')
  const [coords, setCoords] = useState(null)

  const enabledButton = text && image && coords

  const onChangeText = (text) => {
    if (text.length <= 20) {
      setText(text)
    }
  }

  const onBlur = () => {
    setText(text.trim())
  }

  const onSubmit = () => {
    dispatch(addFavoriteLocation({ name: text, coords, image })).unwrap()
    navigation.navigate('Favorites')
  }

  const onImage = (imageUri) => {
    setImage(imageUri)
  }

  const onLocation = (location) => {
    setCoords(location)
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        {/* This View fixes a bug where the ScrollView overflows the Navigation Tab */}
        <Text style={styles.title}>Location Name</Text>
        <TextInput
          style={styles.input}
          placeholder='My favorite place'
          onChangeText={onChangeText}
          onBlur={onBlur}
          value={text}
        />
        <ImageSelector onImage={onImage} />
        <LocationSelector onLocation={onLocation} />
        <CustomButton
          disabled={!enabledButton}
          title={'Add To Favorites'}
          onPress={onSubmit}
          style={{ ...styles.button, ...(enabledButton ? { backgroundColor: theme.colors.primary } : { backgroundColor: theme.colors.primary, opacity: 0.5 }) }}
        />
      </View>
    </ScrollView>
  )
}

export default NewFavoriteScreen
