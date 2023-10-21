/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "fp3vfc7z1lqwtpo",
    "created": "2023-10-20 15:32:19.865Z",
    "updated": "2023-10-20 15:32:19.865Z",
    "name": "club_players",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "jkhhwe7o",
        "name": "playerId",
        "type": "relation",
        "required": true,
        "presentable": false,
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
        "id": "cecoyfwp",
        "name": "clubId",
        "type": "relation",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "ciq20qnkj1swe1v",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
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
  const collection = dao.findCollectionByNameOrId("fp3vfc7z1lqwtpo");

  return dao.deleteCollection(collection);
})
