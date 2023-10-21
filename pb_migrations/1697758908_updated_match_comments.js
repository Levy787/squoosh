/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("x6xdy1jl74acskf")

  collection.name = "match_comment"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("x6xdy1jl74acskf")

  collection.name = "match_comments"

  return dao.saveCollection(collection)
})
