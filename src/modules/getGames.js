const getGames = () => {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/fxcnsYcJrkT4mY83CQhy/scores/';

  const fetchGames = async () => {
    const res = await fetch(url, { method: 'GET' });
    const result = await res.json();
    return result;
  };

  fetchGames().then((game) => {
    const { result } = game;
    const gamesElement = document.getElementById('games');
    let gamesDisplay = '';
    if (result.length > 0) {
      result.map((g) => {
        gamesDisplay += `
        <tr>
        <td>${g.user}: ${g.score}</td>
        </tr>
        `;
        return game;
      });
      gamesElement.innerHTML = gamesDisplay;
    } else {
      gamesElement.textContent = 'No Scores';
    }
  });
};

export default getGames;
