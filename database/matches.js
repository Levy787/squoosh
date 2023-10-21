import PocketBase from "pocketbase";

function flattenItems(obj) {
  const result = { ...obj };
  if ("expand" in result) {
    for (const subKey in result.expand) {
      let key = subKey;
      if (key.endsWith("Id")) {
        key = key.slice(0, -2);
        delete result[subKey];
      }
      result[key] = flattenItems(result.expand[subKey]);
    }
    delete result.expand;
  }
  return result;
}

function groupBy(
  items,
  matchKey,
  newKey
) {
  const results = {};
  items.forEach(item => {
    const matchId = item[matchKey];
    if (matchId in results) {
      results[matchId][newKey].push(item);
    } else {
      results[matchId] = {
        [newKey]: [item]
      };
    }
  });
  return results;
}


export async function getMatches() {
  const pb = new PocketBase("http://127.0.0.1:8090");
  const res = await pb.collection("match_games_view").getList(1, 50, {
    expand: "player_1Id,player_1Id.userId,player2Id,player_2Id.userId,clubId",
  });
  res.items = Array.from(res.items).map((item) => flattenItems(item));
  res.items = groupBy(Array.from(res.items), "matchId", "games");
  return res;
}
