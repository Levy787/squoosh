/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("c575k05tlqv4h3g")

  collection.name = "player"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("c575k05tlqv4h3g")

  collection.name = "players"

  return dao.saveCollection(collection)
})
