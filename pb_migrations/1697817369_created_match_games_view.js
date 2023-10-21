/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "bjiq5tii36jj8a6",
    "created": "2023-10-20 15:56:09.803Z",
    "updated": "2023-10-20 15:56:09.803Z",
    "name": "match_games_view",
    "type": "view",
    "system": false,
    "schema": [],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT g.id FROM games AS g"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("bjiq5tii36jj8a6");

  return dao.deleteCollection(collection);
})
