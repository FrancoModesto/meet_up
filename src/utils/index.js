export function extractErrorMessage(error) {
  return error.response?.data?.message || error.message || error.toString()
}

function getDistanceKM(puntoA, puntoB) {
  const radioTierra = 6371 // Radio medio de la Tierra en kilómetros

  const latitudRadianesA = (puntoA.coords.lat * Math.PI) / 180
  const longitudRadianesA = (puntoA.coords.lon * Math.PI) / 180
  const latitudRadianesB = (puntoB.coords.lat * Math.PI) / 180
  const longitudRadianesB = (puntoB.coords.lon * Math.PI) / 180

  const diferenciaLatitud = latitudRadianesB - latitudRadianesA
  const diferenciaLongitud = longitudRadianesB - longitudRadianesA

  const a =
    Math.sin(diferenciaLatitud / 2) * Math.sin(diferenciaLatitud / 2) +
    Math.cos(latitudRadianesA) *
    Math.cos(latitudRadianesB) *
    Math.sin(diferenciaLongitud / 2) *
    Math.sin(diferenciaLongitud / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  const distancia = radioTierra * c

  return distancia
}

export function findClosestOfAll(ubicaciones) {
  const numUbicaciones = ubicaciones.length
  let promedioMinimo = Infinity
  let ubicacionMasCercana = null

  for (let i = 0; i < numUbicaciones; i++) {
    let sumaDistancias = 0

    for (let j = 0; j < numUbicaciones; j++) {
      if (i !== j) {
        const distancia = getDistanceKM(ubicaciones[i], ubicaciones[j])
        sumaDistancias += distancia
      }
    }

    const promedio = sumaDistancias / (numUbicaciones - 1)

    if (promedio < promedioMinimo) {
      promedioMinimo = promedio
      ubicacionMasCercana = ubicaciones[i].id
    }
  }

  return { id: ubicacionMasCercana, average: promedioMinimo.toFixed(3) }
}
