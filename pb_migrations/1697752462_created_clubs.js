/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ciq20qnkj1swe1v",
    "created": "2023-10-19 21:54:22.996Z",
    "updated": "2023-10-19 21:54:22.996Z",
    "name": "clubs",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "e1aw5kld",
        "name": "club_name",
        "type": "text",
        "required": true,
        "presentable": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "b98v97ca",
        "name": "club_location",
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
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ciq20qnkj1swe1v");

  return dao.deleteCollection(collection);
})
