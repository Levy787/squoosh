/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("q9yaq3657jdyehg")

  collection.options = {
    "query": "WITH CteMatchGames AS (\n  SELECT\n    id AS gameId, \n    player_1_score,\n    player_2_score\n  FROM game\n  UNION ALL\n  SELECT \n    m.id AS matchId, \n    g.player_1_score,\n    g.player_2_score\n  FROM match AS m\n  JOIN game AS g ON g.id = m.games\n  WHERE m.games IS NOT NULL\n)\n\nSELECT\n  (ROW_NUMBER() OVER()) as id,\n  gameId,\n  player_1_score,\n  player_2_score\nFROM CteMatchGames;"
  }

  // remove
  collection.schema.removeField("rimgp59t")

  // remove
  collection.schema.removeField("haqrcjec")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "egevcbax",
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
    "id": "07drtxj2",
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
    "id": "fpbyyewf",
    "name": "player_2_score",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("q9yaq3657jdyehg")

  collection.options = {
    "query": "WITH CteMatchGames AS (\n  SELECT\n    id AS gameId, \n    player_1_score,\n    player_2_score\n  FROM game\n  UNION ALL\n  SELECT \n    m.id AS matchId, \n    g.player_1_score,\n    g.player_2_score\n  FROM match AS m\n  JOIN game AS g ON g.id = m.games\n  WHERE m.games IS NOT NULL\n)\n\nSELECT\n  (ROW_NUMBER() OVER()) as id,\n  gameId,\n  player_1_score\nFROM CteMatchGames;"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rimgp59t",
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
    "id": "haqrcjec",
    "name": "player_1_score",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("egevcbax")

  // remove
  collection.schema.removeField("07drtxj2")

  // remove
  collection.schema.removeField("fpbyyewf")

  return dao.saveCollection(collection)
})
