import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { extractErrorMessage } from '../utils'
import Location from '../model/location'
import { insertFavoriteLocation, deleteFavoriteLocation, selectFavoriteLocations } from '../db'
import { URL_GEOCODING } from '../utils/maps'

const initialState = {
  data: [],
  isLoading: false
}

export const addFavoriteLocation = createAsyncThunk('favoriteLocation/addFavoriteLocation', async (location, thunkAPI) => {
  try {
    const responseGEO = await fetch(URL_GEOCODING(location.coords.lat, location.coords.lon))
    if (!responseGEO.ok) {
      return thunkAPI.rejectWithValue('Something went wrong!')
    }
    const dataGEO = await responseGEO.json()
    if (!dataGEO.results) {
      return thunkAPI.rejectWithValue('Location not found')
    }
    const address = dataGEO.results[0].formatted_address

    const resultDB = await insertFavoriteLocation(location.name, address, location.coords, location.image)
    const newFavoriteLocation = new Location(resultDB.insertId, location.name, address, location.coords, location.image)
    return newFavoriteLocation
  } catch (error) {
    return thunkAPI.rejectWithValue(extractErrorMessage(error))
  }
})

export const removeFavoriteLocation = createAsyncThunk('favoriteLocation/removeFavoriteLocation', async (id, thunkAPI) => {
  try {
    await deleteFavoriteLocation(id)
    return id
  } catch (error) {
    return thunkAPI.rejectWithValue(extractErrorMessage(error))
  }
})

export const getFavoriteLocations = createAsyncThunk('favoriteLocation/getFavoriteLocations', async (_, thunkAPI) => {
  try {
    const result = await selectFavoriteLocations()
    const favoriteLocationDB = result?.rows?._array
    if (favoriteLocationDB.length > 0) {
      const favoriteLocationsParsed = favoriteLocationDB.map(location => new Location(location.id, location.name, location.address, JSON.parse(location.coords), location.image))
      return favoriteLocationsParsed
    } else {
      return []
    }
  } catch (error) {
    return thunkAPI.rejectWithValue(extractErrorMessage(error))
  }
})

const favoriteLocationSlice = createSlice({
  name: 'favoriteLocation',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(addFavoriteLocation.pending, (state) => {
        state.isLoading = true
      })
      .addCase(addFavoriteLocation.fulfilled, (state, action) => {
        state.isLoading = false
        state.data.push(action.payload)
      })
      .addCase(addFavoriteLocation.rejected, (state, _) => {
        state.isLoading = false
      })

      .addCase(removeFavoriteLocation.pending, (state) => {
        state.isLoading = true
      })
      .addCase(removeFavoriteLocation.fulfilled, (state, action) => {
        state.isLoading = false
        state.data = state.data.filter(location => location.id !== action.payload)
      })
      .addCase(removeFavoriteLocation.rejected, (state, _) => {
        state.isLoading = false
      })

      .addCase(getFavoriteLocations.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getFavoriteLocations.fulfilled, (state, action) => {
        state.isLoading = false
        state.data = action.payload
      })
      .addCase(getFavoriteLocations.rejected, (state, _) => {
        state.isLoading = false
      })
  },
})

export default favoriteLocationSlice.reducer
