/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("q9yaq3657jdyehg")

  collection.options = {
    "query": "  SELECT\n    (ROW_NUMBER() OVER()) as id,\n    m.id AS matchId,\n    g.id AS gameId, \n    g.player_1_score,\n    g.player_2_score\n  FROM game AS g\n  LEFT JOIN match AS m ON g.id = m.games"
  }

  // remove
  collection.schema.removeField("hhpu7sii")

  // remove
  collection.schema.removeField("tzjwvu6a")

  // remove
  collection.schema.removeField("dtaeh6sg")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "oxlialkl",
    "name": "matchId",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jcf95kfv",
    "name": "gameId",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "gt6acgjradxv096",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bjptgdfx",
    "name": "player_1_score",
    "type": "number",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": null,
      "noDecimal": true
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zxxvxoft",
    "name": "player_2_score",
    "type": "number",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": null,
      "noDecimal": true
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("q9yaq3657jdyehg")

  collection.options = {
    "query": "  SELECT\n    g.id AS gameId, \n    g.player_1_score,\n    g.player_2_score,\n    m.id AS id\n  FROM game AS g\n  LEFT JOIN match AS m ON g.id = m.games"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hhpu7sii",
    "name": "gameId",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "gt6acgjradxv096",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tzjwvu6a",
    "name": "player_1_score",
    "type": "number",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": null,
      "noDecimal": true
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dtaeh6sg",
    "name": "player_2_score",
    "type": "number",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": null,
      "noDecimal": true
    }
  }))

  // remove
  collection.schema.removeField("oxlialkl")

  // remove
  collection.schema.removeField("jcf95kfv")

  // remove
  collection.schema.removeField("bjptgdfx")

  // remove
  collection.schema.removeField("zxxvxoft")

  return dao.saveCollection(collection)
})
