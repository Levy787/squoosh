/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("q9yaq3657jdyehg")

  collection.options = {
    "query": "  SELECT\n    g.id AS gameId, \n    g.player_1_score,\n    g.player_2_score,\n    m.id AS id\n  FROM game AS g\n  LEFT JOIN match AS m ON g.id = m.games"
  }

  // remove
  collection.schema.removeField("ht547c0n")

  // remove
  collection.schema.removeField("drqhwusc")

  // remove
  collection.schema.removeField("eterojhh")

  // remove
  collection.schema.removeField("tsrftcis")

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("q9yaq3657jdyehg")

  collection.options = {
    "query": "WITH CteMatchGames AS (\n  SELECT\n    g.id AS gameId, \n    g.player_1_score,\n    g.player_2_score,\n    m.id AS matchId\n  FROM game AS g\n  LEFT JOIN match AS m ON g.id = m.games\n  UNION ALL\n  SELECT \n    m.id AS matchId, \n    g.player_1_score,\n    g.player_2_score,\n    m.id AS matchId\n  FROM match AS m\n  JOIN game AS g ON g.id = m.games\n  WHERE m.games IS NOT NULL\n)\n\nSELECT\n  (ROW_NUMBER() OVER()) as id,\n  gameId AS `gameId`,\n  matchId AS `matchId`,\n  player_1_score,\n  player_2_score\nFROM CteMatchGames;\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ht547c0n",
    "name": "gameId",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "drqhwusc",
    "name": "matchId",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "eterojhh",
    "name": "player_1_score",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tsrftcis",
    "name": "player_2_score",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("hhpu7sii")

  // remove
  collection.schema.removeField("tzjwvu6a")

  // remove
  collection.schema.removeField("dtaeh6sg")

  return dao.saveCollection(collection)
})
