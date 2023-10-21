/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bjiq5tii36jj8a6")

  collection.options = {
    "query": "\n\nSELECT g.id, g.matchId, m.player_1Id, m.player_2Id\n  FROM games AS g\n  LEFT JOIN matches AS m ON g.matchId = m.id;\n\n"
  }

  // remove
  collection.schema.removeField("s1fsupc6")

  // remove
  collection.schema.removeField("dxsb2oip")

  // remove
  collection.schema.removeField("aj1vdy8q")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kdj5k9d3",
    "name": "matchId",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "aysiksmvn05xkh5",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jw5q3fbd",
    "name": "player_1Id",
    "type": "relation",
    "required": true,
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
    "id": "iwny47wu",
    "name": "player_2Id",
    "type": "relation",
    "required": true,
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bjiq5tii36jj8a6")

  collection.options = {
    "query": "SELECT g.id, g.matchId, m.player_1Id, m.player_2Id\n  FROM games AS g\n  LEFT JOIN matches AS m ON g.matchId = m.id;\n\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "s1fsupc6",
    "name": "matchId",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "aysiksmvn05xkh5",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dxsb2oip",
    "name": "player_1Id",
    "type": "relation",
    "required": true,
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
    "id": "aj1vdy8q",
    "name": "player_2Id",
    "type": "relation",
    "required": true,
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

  // remove
  collection.schema.removeField("kdj5k9d3")

  // remove
  collection.schema.removeField("jw5q3fbd")

  // remove
  collection.schema.removeField("iwny47wu")

  return dao.saveCollection(collection)
})
