/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gt6acgjradxv096")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xvheacfj",
    "name": "match",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "aysiksmvn05xkh5",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gt6acgjradxv096")

  // remove
  collection.schema.removeField("xvheacfj")

  return dao.saveCollection(collection)
})
