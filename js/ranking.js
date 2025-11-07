async function fetchRanking(limit = 15) {
  try {
    const User = Parse.Object.extend("User");
    const query = new Parse.Query(User);

    // Ordenar por cafés servidos (descendente)
    query.descending("coffeeCount");
    query.limit(limit);

    const results = await query.find();

    const ranking = results.map((user, index) => ({
      position: index + 1,
      username: user.get("username"),
      coffeeCount: user.get("coffeeCount") || 0,
      level: user.get("level") || 1,
    }));

    return ranking;
  } catch (error) {
    console.error("Erro ao buscar ranking:", error);
    return [];
  }
}

// Renderizar ranking
function renderRanking(ranking) {
  if (ranking.length === 0) return;

  // Top 3 no pódio
  if (ranking.length >= 1) {
    updatePodiumPlayer(".podium-first", ranking[0]);
  }
  if (ranking.length >= 2) {
    updatePodiumPlayer(".podium-second", ranking[1]);
  }
  if (ranking.length >= 3) {
    updatePodiumPlayer(".podium-third", ranking[2]);
  }

  // Demais jogadores na lista
  const rankingList = document.querySelector(".ranking-list");
  if (rankingList && ranking.length > 3) {
    rankingList.innerHTML = "";

    for (let i = 3; i < ranking.length; i++) {
      const player = ranking[i];
      const item = createRankingItem(player);
      rankingList.appendChild(item);
    }
  }
}

function updatePodiumPlayer(selector, player) {
  const podiumItem = document.querySelector(selector);
  if (!podiumItem) return;

  const nameElement = podiumItem.querySelector(".podium-name");
  const scoreElement = podiumItem.querySelector(".podium-score");

  if (nameElement) nameElement.textContent = player.username;
  if (scoreElement)
    scoreElement.textContent = player.coffeeCount.toLocaleString();
}

function createRankingItem(player) {
  const item = document.createElement("div");
  item.className = "ranking-item";

  item.innerHTML = `
    <div class="ranking-position">${player.position}</div>
    <div class="ranking-avatar">👤</div>
    <div class="ranking-info">
      <div class="ranking-name">${player.username}</div>
      <div class="ranking-score">☕ ${player.coffeeCount.toLocaleString()} Cafés Servidos</div>
    </div>
  `;

  return item;
}

// Buscar posição do usuário atual
async function getCurrentUserRank() {
  try {
    const currentUser = Parse.User.current();
    if (!currentUser) return null;

    const currentCoffeeCount = currentUser.get("coffeeCount") || 0;

    const User = Parse.Object.extend("User");
    const query = new Parse.Query(User);
    query.greaterThan("coffeeCount", currentCoffeeCount);

    const count = await query.count();

    return count + 1; // Posição é count + 1
  } catch (error) {
    console.error("Erro ao buscar posição:", error);
    return null;
  }
}
