/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("q9yaq3657jdyehg")

  collection.options = {
    "query": "WITH CteMatchGames AS (\n  SELECT \n    'game' AS source,\n    id AS id, \n    player_1_score AS p1s \n  FROM game\n  UNION ALL\n  SELECT \n    'match' AS source,\n    m.id AS id, \n    g.player_1_score AS p1s\n  FROM match AS m\n  JOIN game AS g ON g.id = m.games\n  WHERE m.games IS NOT NULL\n)\n\nSELECT\n  source,\n  id,\n  p1s\nFROM CteMatchGames;"
  }

  // remove
  collection.schema.removeField("ve7s4kbo")

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("q9yaq3657jdyehg")

  collection.options = {
    "query": "SELECT id, games from match;"
  }

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

  // remove
  collection.schema.removeField("iqeofofx")

  // remove
  collection.schema.removeField("gpgydiwz")

  return dao.saveCollection(collection)
})
