/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("q9yaq3657jdyehg")

  collection.options = {
    "query": "SELECT\n    player.id,\n    user.name\nFROM player\nLEFT JOIN user on player.user = user.id"
  }

  // remove
  collection.schema.removeField("vitrt2oz")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mvwpngcx",
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
    "query": "SELECT p.id, p.user FROM player as p;"
  }

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

  // remove
  collection.schema.removeField("mvwpngcx")

  return dao.saveCollection(collection)
})
