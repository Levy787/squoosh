/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "q9yaq3657jdyehg",
    "created": "2023-10-20 13:49:21.462Z",
    "updated": "2023-10-20 13:49:21.462Z",
    "name": "match_view",
    "type": "view",
    "system": false,
    "schema": [],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT id FROM match;"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("q9yaq3657jdyehg");

  return dao.deleteCollection(collection);
})
