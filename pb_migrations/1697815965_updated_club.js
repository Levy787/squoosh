/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ciq20qnkj1swe1v")

  collection.name = "clubs"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ciq20qnkj1swe1v")

  collection.name = "club"

  return dao.saveCollection(collection)
})
