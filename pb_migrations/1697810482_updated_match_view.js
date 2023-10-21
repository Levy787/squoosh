/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("q9yaq3657jdyehg")

  collection.options = {
    "query": "SELECT p.id, p.user FROM player as p;"
  }

  // remove
  collection.schema.removeField("fy4j84tv")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vitrt2oz",
    "name": "user",
    "type": "relation",
    "required": false,
    "presentable": true,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
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

  // remove
  collection.schema.removeField("vitrt2oz")

  return dao.saveCollection(collection)
})
