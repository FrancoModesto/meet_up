import { FlatList, View, Text } from 'react-native'
import LocationItem from './LocationItem'

import { styles } from './styles'

const LocationsList = ({ locations, onSelectLocation, emptyText }) => {
  const renderItem = ({ item }) => (
    <LocationItem location={item} onSelectLocation={onSelectLocation} />
  )

  const keyExtractor = (item) => item.id

  return (
    locations && locations.length > 0 ?
      (
        <FlatList style={styles.container}
          renderItem={renderItem}
          data={locations}
          keyExtractor={keyExtractor}
          alwaysBounceVertical={false}
        />
      )
      :
      (
        <View style={styles.textContainer}>
          <Text style={styles.text}>{emptyText}</Text>
        </View>
      )
  )
}

export default LocationsList
