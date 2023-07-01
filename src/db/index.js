import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('favoriteLocations.db')

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS favoriteLocations (id INTEGER PRIMARY KEY NOT NULL, name TEXT NOT NULL, address TEXT NOT NULL, coords TEXT NOT NULL, image TEXT NOT NULL)',
        [],
        () => {
          resolve()
        },
        (_, err) => {
          reject(err)
        }
      )
    })
  })

  return promise
}

export const insertFavoriteLocation = (name, address, coords, image) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO favoriteLocations (name, address, coords, image) VALUES (?,?,?,?)',
        [name, address, JSON.stringify(coords), image],
        (_, result) => {
          resolve(result)
        },
        (_, err) => {
          reject(err)
        }
      )
    })
  })

  return promise
}

export const deleteFavoriteLocation = (id) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'DELETE FROM favoriteLocations WHERE id = ?',
        [id],
        (_, result) => {
          resolve(result)
        },
        (_, err) => {
          reject(err)
        }
      )
    })
  })

  return promise
}

export const selectFavoriteLocations = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM favoriteLocations',
        [],
        (_, result) => {
          resolve(result)
        },
        (_, err) => {
          reject(err)
        }
      )
    })
  })

  return promise
}
