/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("q9yaq3657jdyehg")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id, u.name from user as u;"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fy4j84tv",
    "name": "name",
    "type": "text",
    "required": false,
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
  const collection = dao.findCollectionByNameOrId("q9yaq3657jdyehg")

  collection.options = {
    "query": "SELECT m.id FROM match as m;"
  }

  // remove
  collection.schema.removeField("fy4j84tv")

  return dao.saveCollection(collection)
})
