/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bjiq5tii36jj8a6")

  collection.options = {
    "query": "\n\nSELECT g.id, g.matchId, m.player_1Id, m.player_2Id, g.player_1_score, g.player_2_score, g.duration, m.clubId, (SELECT COUNT(id) FROM match_likes WHERE matchId = m.id) as num_likes, (SELECT COUNT(id) FROM match_comments WHERE matchId = m.id) as num_comments\n  FROM games AS g\n  LEFT JOIN matches AS m ON g.matchId = m.id;\n\n"
  }

  // remove
  collection.schema.removeField("24xyaern")

  // remove
  collection.schema.removeField("8okv8lwy")

  // remove
  collection.schema.removeField("rwwccpqq")

  // remove
  collection.schema.removeField("x9kbizeh")

  // remove
  collection.schema.removeField("hwnuoac0")

  // remove
  collection.schema.removeField("d2hbbrei")

  // remove
  collection.schema.removeField("mkiguu5v")

  // remove
  collection.schema.removeField("4okhflbv")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "r3f4w5mr",
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
    "id": "gpbprd3w",
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
    "id": "3cdun0wn",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tanniobs",
    "name": "player_1_score",
    "type": "number",
    "required": false,
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
    "id": "lmdx80c7",
    "name": "player_2_score",
    "type": "number",
    "required": false,
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
    "id": "afszpczr",
    "name": "duration",
    "type": "number",
    "required": false,
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
    "id": "teukv8d2",
    "name": "clubId",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "ciq20qnkj1swe1v",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "aqgt9nyy",
    "name": "num_likes",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "12nrodju",
    "name": "num_comments",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bjiq5tii36jj8a6")

  collection.options = {
    "query": "\n\nSELECT g.id, g.matchId, m.player_1Id, m.player_2Id, g.player_1_score, g.player_2_score, g.duration, m.clubId, (SELECT COUNT(id) FROM match_likes WHERE matchId = m.id) as likes\n  FROM games AS g\n  LEFT JOIN matches AS m ON g.matchId = m.id;\n\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "24xyaern",
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
    "id": "8okv8lwy",
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
    "id": "rwwccpqq",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "x9kbizeh",
    "name": "player_1_score",
    "type": "number",
    "required": false,
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
    "id": "hwnuoac0",
    "name": "player_2_score",
    "type": "number",
    "required": false,
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
    "id": "d2hbbrei",
    "name": "duration",
    "type": "number",
    "required": false,
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
    "id": "mkiguu5v",
    "name": "clubId",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "ciq20qnkj1swe1v",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4okhflbv",
    "name": "likes",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("r3f4w5mr")

  // remove
  collection.schema.removeField("gpbprd3w")

  // remove
  collection.schema.removeField("3cdun0wn")

  // remove
  collection.schema.removeField("tanniobs")

  // remove
  collection.schema.removeField("lmdx80c7")

  // remove
  collection.schema.removeField("afszpczr")

  // remove
  collection.schema.removeField("teukv8d2")

  // remove
  collection.schema.removeField("aqgt9nyy")

  // remove
  collection.schema.removeField("12nrodju")

  return dao.saveCollection(collection)
})
