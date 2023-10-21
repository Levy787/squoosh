/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("q9yaq3657jdyehg")

  collection.options = {
    "query": "SELECT id, games from match;"
  }

  // remove
  collection.schema.removeField("57jl7xrn")

  // remove
  collection.schema.removeField("pzhfupzr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ve7s4kbo",
    "name": "games",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "gt6acgjradxv096",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("q9yaq3657jdyehg")

  collection.options = {
    "query": "SELECT\n  (ROW_NUMBER() OVER()) as id,\n    player.id as playerId,\n    user.name\nFROM player\nLEFT JOIN user on player.user = user.id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "57jl7xrn",
    "name": "playerId",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "c575k05tlqv4h3g",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pzhfupzr",
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
  collection.schema.removeField("ve7s4kbo")

  return dao.saveCollection(collection)
})
