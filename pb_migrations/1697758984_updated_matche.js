/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("aysiksmvn05xkh5")

  collection.name = "match"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("aysiksmvn05xkh5")

  collection.name = "matche"

  return dao.saveCollection(collection)
})
