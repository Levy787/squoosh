/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("q9yaq3657jdyehg");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "q9yaq3657jdyehg",
    "created": "2023-10-20 13:49:21.462Z",
    "updated": "2023-10-20 14:57:05.549Z",
    "name": "match_view",
    "type": "view",
    "system": false,
    "schema": [
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "  SELECT\n    (ROW_NUMBER() OVER()) as id,\n    m.id AS matchId,\n    g.id AS gameId, \n    g.player_1_score,\n    g.player_2_score\n  FROM game AS g\n  LEFT JOIN match AS m ON g.id = m.games"
    }
  });

  return Dao(db).saveCollection(collection);
})
