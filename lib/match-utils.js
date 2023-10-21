
export function getWinner(match) {
  let player_1_games = getGamesWon(match, match.player_1);
  let player_2_games = getGamesWon(match, match.player_2);
  if (player_1_games === player_2_games) return null;
  return player_1_games > player_2_games ? match.player_1 : match.player_2;
}

export function getLoser(match) {
  const winner = getWinner(match);
  if (!winner) return null;
  return winner.id === match.player_1.id ? match.player_1 : match.player_2;
}

export function getTotalGames(games) {
  return games.length;
}

export function getGamesWon(match, player) {
  let gamesWon = 0;
  const thisPlayer =
    player.id === match.player_1.id ? "player_1_score" : "player_2_score";
  const otherPlayer =
    thisPlayer === "player_1_score" ? "player_2_score" : "player_1_score";
  match.games.forEach((game) => {
    if (game[thisPlayer] > game[otherPlayer]) {
      gamesWon++;
    }
  });
  return gamesWon;
}

export function getTotalPoints(match, player) {
  let points = 0;
  const thisPlayer =
    player.id === match.player_1.id ? "player_1_score" : "player_2_score";
  match.games.forEach((game) => {
    points += game[thisPlayer];
  });
  return points;
}

export function getDuration(match) {
  let duration = 0;
  match.games.forEach((game) => {
    duration += game.duration_hours * 60 + game.duration_minutes;
  });
  return duration;
}
