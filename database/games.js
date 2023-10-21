import PocketBase from "pocketbase";

async function getGames() {
    const db = new PocketBase("http://127.0.0.1:8090");
    const data = await db
      .collection("games")
      .getList();
    console.log(data.items)
    return data.items;
  }