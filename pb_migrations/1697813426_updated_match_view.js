/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("q9yaq3657jdyehg")

  collection.options = {
    "query": "WITH CteMatchGames AS (\n  SELECT\n    g.id AS gameId, \n    g.player_1_score,\n    g.player_2_score,\n    m.id AS matchId\n  FROM game AS g\n  LEFT JOIN match AS m ON g.id = m.games\n  UNION ALL\n  SELECT \n    m.id AS matchId, \n    g.player_1_score,\n    g.player_2_score,\n    m.id\n  FROM match AS m\n  JOIN game AS g ON g.id = m.games\n  WHERE m.games IS NOT NULL\n)\n\nSELECT\n  (ROW_NUMBER() OVER()) as id,\n  gameId,\n  matchId,\n  player_1_score,\n  player_2_score\nFROM CteMatchGames;"
  }

  // remove
  collection.schema.removeField("38jcruyo")

  // remove
  collection.schema.removeField("gttjw4bi")

  // remove
  collection.schema.removeField("un7gfyf5")

  // remove
  collection.schema.removeField("ksp8zwxm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qxop76l0",
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
    "id": "mmpesqks",
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
    "id": "o1fmsobl",
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
    "id": "ytb1u0gn",
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
    "query": "WITH CteMatchGames AS (\n  SELECT\n    g.id AS gameId, \n    g.player_1_score,\n    g.player_2_score,\n    m.id AS matchId\n  FROM game AS g\n  LEFT JOIN match AS m ON g.id = m.games\n  WHERE m.games IS NOT NULL\n)\n\nSELECT\n  (ROW_NUMBER() OVER()) as id,\n  gameId,\n  matchId,\n  player_1_score,\n  player_2_score\nFROM CteMatchGames;"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "38jcruyo",
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
    "id": "gttjw4bi",
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
    "id": "un7gfyf5",
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
    "id": "ksp8zwxm",
    "name": "player_2_score",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("qxop76l0")

  // remove
  collection.schema.removeField("mmpesqks")

  // remove
  collection.schema.removeField("o1fmsobl")

  // remove
  collection.schema.removeField("ytb1u0gn")

  return dao.saveCollection(collection)
})
