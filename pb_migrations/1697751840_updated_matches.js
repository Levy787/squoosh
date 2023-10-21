/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("aysiksmvn05xkh5")

  // remove
  collection.schema.removeField("j6r0of5d")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5dk2zaww",
    "name": "player_1",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "c575k05tlqv4h3g",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dz9hjdlq",
    "name": "player_2",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "c575k05tlqv4h3g",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rmkro285",
    "name": "duration",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": 100,
      "noDecimal": true
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("aysiksmvn05xkh5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "j6r0of5d",
    "name": "minutes",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": 60,
      "noDecimal": true
    }
  }))

  // remove
  collection.schema.removeField("5dk2zaww")

  // remove
  collection.schema.removeField("dz9hjdlq")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rmkro285",
    "name": "hours",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": 100,
      "noDecimal": true
    }
  }))

  return dao.saveCollection(collection)
})
