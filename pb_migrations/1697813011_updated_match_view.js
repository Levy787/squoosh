/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("q9yaq3657jdyehg")

  collection.options = {
    "query": "WITH CteMatchGames AS (\n  SELECT\n    id AS gameId, \n    player_1_score\n  FROM game\n  UNION ALL\n  SELECT \n    m.id AS matchId, \n    g.player_1_score AS p1s\n  FROM match AS m\n  JOIN game AS g ON g.id = m.games\n  WHERE m.games IS NOT NULL\n)\n\nSELECT\n  (ROW_NUMBER() OVER()) as id,\n  gameId,\n  player_1_score\nFROM CteMatchGames;"
  }

  // remove
  collection.schema.removeField("iqeofofx")

  // remove
  collection.schema.removeField("gpgydiwz")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jqtq6eg3",
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
    "id": "igwhay4g",
    "name": "player_1_score",
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
    "query": "WITH CteMatchGames AS (\n  SELECT \n    'game' AS source,\n    id AS id, \n    player_1_score AS p1s \n  FROM game\n  UNION ALL\n  SELECT \n    'match' AS source,\n    m.id AS id, \n    g.player_1_score AS p1s\n  FROM match AS m\n  JOIN game AS g ON g.id = m.games\n  WHERE m.games IS NOT NULL\n)\n\nSELECT\n  source,\n  id,\n  p1s\nFROM CteMatchGames;"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "iqeofofx",
    "name": "source",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gpgydiwz",
    "name": "p1s",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("jqtq6eg3")

  // remove
  collection.schema.removeField("igwhay4g")

  return dao.saveCollection(collection)
})
