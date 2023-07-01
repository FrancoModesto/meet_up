import { View, Text, Image, TouchableOpacity } from 'react-native'

import { styles } from './styles'

const LocationItem = ({ location, onSelectLocation }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onSelectLocation(location.id)}>
      <Image style={styles.image} source={{ uri: location.image }}></Image>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{location.name}</Text>
        <Text style={styles.address}>{location.address}</Text>
      </View>
    </TouchableOpacity>
  )
}
export default LocationItem
