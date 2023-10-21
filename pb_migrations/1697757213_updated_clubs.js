/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ciq20qnkj1swe1v")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "simmvcfh",
    "name": "players",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "c575k05tlqv4h3g",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ciq20qnkj1swe1v")

  // remove
  collection.schema.removeField("simmvcfh")

  return dao.saveCollection(collection)
})
