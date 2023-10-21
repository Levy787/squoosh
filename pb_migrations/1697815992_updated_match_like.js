/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7oll37mfsn0rtye")

  collection.name = "match_likes"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7oll37mfsn0rtye")

  collection.name = "match_like"

  return dao.saveCollection(collection)
})
