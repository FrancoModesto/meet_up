export const MAPS_API_KEY = ''

export const URL_MAPS = (lat, lon, zoom = 14) => `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lon}&zoom=${zoom}&size=600x300&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lon}&key=${MAPS_API_KEY}`

export const URL_GEOCODING = (lat, lon) => `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=${MAPS_API_KEY}`
