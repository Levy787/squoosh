/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("c575k05tlqv4h3g")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ufdiddmz",
    "name": "location",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("c575k05tlqv4h3g")

  // remove
  collection.schema.removeField("ufdiddmz")

  return dao.saveCollection(collection)
})
