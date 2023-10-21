/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("c575k05tlqv4h3g")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lrxnhm79",
    "name": "first_name",
    "type": "text",
    "required": true,
    "presentable": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hlqt7uwa",
    "name": "last_name",
    "type": "text",
    "required": true,
    "presentable": true,
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
  collection.schema.removeField("lrxnhm79")

  // remove
  collection.schema.removeField("hlqt7uwa")

  return dao.saveCollection(collection)
})
