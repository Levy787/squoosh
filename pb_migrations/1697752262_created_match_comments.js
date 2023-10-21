/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "x6xdy1jl74acskf",
    "created": "2023-10-19 21:51:02.538Z",
    "updated": "2023-10-19 21:51:02.538Z",
    "name": "match_comments",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "8gqh1ofl",
        "name": "player",
        "type": "relation",
        "required": true,
        "presentable": true,
        "unique": false,
        "options": {
          "collectionId": "c575k05tlqv4h3g",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "tvlvq2o6",
        "name": "comment",
        "type": "text",
        "required": true,
        "presentable": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("x6xdy1jl74acskf");

  return dao.deleteCollection(collection);
})
