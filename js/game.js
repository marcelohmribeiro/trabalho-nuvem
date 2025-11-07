// Lógica do Jogo com sincronização Back4App

let gameState = {
  coffeeCount: 0,
  coins: 0,
  level: 1,
  playTime: 0,
};

// Inicializar jogo
function initGame() {
  const userData = getCurrentUserData();
  if (userData) {
    gameState = {
      coffeeCount: userData.coffeeCount,
      coins: userData.coins,
      level: userData.level,
      playTime: userData.playTime,
    };
    updateUI();
  }
}

// Atualizar UI
function updateUI() {
  const coffeeElement = document.querySelector(".stat-value");
  const coinsElements = document.querySelectorAll(".stat-value");

  if (coffeeElement) {
    coffeeElement.textContent = gameState.coffeeCount.toLocaleString();
  }

  if (coinsElements.length > 1) {
    coinsElements[1].textContent = gameState.coins.toLocaleString();
  }

  // Atualizar saldo na loja
  const balanceAmount = document.querySelector(".balance-amount");
  if (balanceAmount) {
    balanceAmount.textContent = `${gameState.coins.toLocaleString()} Moedas`;
  }
}

// Clique no café
function clickCoffee(event) {
  const button = document.querySelector(".coffee-button");
  const container = document.getElementById("particlesContainer");

  // Animação de clique no botão
  button.style.transform = "scale(0.95)";
  setTimeout(() => {
    button.style.transform = "scale(1)";
  }, 100);

  // Incrementar contadores
  gameState.coffeeCount++;
  gameState.coins++;

  // Atualizar UI
  updateUI();

  // Criar partículas de café
  createCoffeeParticles(event, container);

  // Salvar no Back4App (debounced)
  saveGameProgress();
}

// Salvar progresso (debounced para não sobrecarregar)
let saveTimeout;
function saveGameProgress() {
  clearTimeout(saveTimeout);
  saveTimeout = setTimeout(async () => {
    await updateUserData(gameState);
  }, 2000); // Salva após 2 segundos de inatividade
}

// Criar partículas de café
function createCoffeeParticles(event, container) {
  const particleCount = 8;
  const emojis = ["☕", "💨", "✨", "🌟"];

  const button = event.currentTarget;
  const rect = button.getBoundingClientRect();
  const clickX = event.clientX - rect.left;
  const clickY = event.clientY - rect.top;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.className = "coffee-particle";

    const emoji = emojis[Math.floor(Math.random() * emojis.length)];
    particle.textContent = emoji;

    particle.style.left = clickX + "px";
    particle.style.top = clickY + "px";

    const angle = (Math.PI * 2 * i) / particleCount;
    const velocity = 80 + Math.random() * 40;

    const deltaX = Math.cos(angle) * velocity;
    const deltaY = Math.sin(angle) * velocity - 50;

    particle.style.setProperty("--deltaX", deltaX + "px");
    particle.style.setProperty("--deltaY", deltaY + "px");

    const rotation = Math.random() * 720 - 360;
    particle.style.setProperty("--rotation", rotation + "deg");

    container.appendChild(particle);

    setTimeout(() => {
      particle.remove();
    }, 1000);
  }

  createScorePopup(clickX, clickY, container);
}

function createScorePopup(x, y, container) {
  const scorePopup = document.createElement("div");
  scorePopup.className = "score-popup";
  scorePopup.textContent = "+1";
  scorePopup.style.left = x + "px";
  scorePopup.style.top = y + "px";

  container.appendChild(scorePopup);

  setTimeout(() => {
    scorePopup.remove();
  }, 1000);
}

// Comprar produto
async function buyProduct(productName, price) {
  if (gameState.coins >= price) {
    gameState.coins -= price;
    updateUI();
    await saveGameProgress();
    alert(`Você comprou ${productName}!`);
  } else {
    alert("Moedas insuficientes!");
  }
}
