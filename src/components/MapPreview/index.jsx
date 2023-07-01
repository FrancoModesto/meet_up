import { Image, View } from 'react-native'
import { URL_MAPS } from '../../utils/maps'

import { styles } from './styles'

const MapPreview = ({ children, location, style }) => {
  const { lat, lon } = location || {}
  const mapPreviewUrl = location ? URL_MAPS(lat, lon) : ''

  return (
    <View style={{ ...styles.container, ...style }}>
      {location ? <Image style={styles.mapImage} source={{ uri: mapPreviewUrl }} /> : children}
    </View>
  )
}

export default MapPreview
