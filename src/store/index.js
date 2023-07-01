import { configureStore } from '@reduxjs/toolkit'

import favoriteLocationReducer from './favoriteLocation.slice'

export const store = configureStore({
  reducer: {
    favoriteLocation: favoriteLocationReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})
