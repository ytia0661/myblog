document.addEventListener("DOMContentLoaded", function() {

  let games = [];

  fetch('/data/games.json')
    .then(res => res.json())
    .then(data => {
      games = data;
      renderGames(games);
    });

  function renderGames(list) {
    const container = document.getElementById("game-list");
    container.innerHTML = "";

    list.forEach(g => {
      container.innerHTML += `
        <div class="game-card">
          <h3>${g.name}</h3>
          <p>⭐ 评分：${g.score}</p>
          <p>📅 通关时间：${g.date}</p>
          <p>${g.comment}</p>
        </div>
      `;
    });
  }

  window.sortByScore = function() {
    games.sort((a,b) => b.score - a.score);
    renderGames(games);
  }

  window.sortByDate = function() {
    games.sort((a,b) => new Date(b.date) - new Date(a.date));
    renderGames(games);
  }

});