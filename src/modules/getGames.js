import { getGamesApi } from './api';

const getGames = async () => {
  const url =
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/fxcnsYcJrkT4mY83CQhy/scores/';

  const fetchedGames = await getGamesApi(url);
  const { result } = fetchedGames;
  const gamesElement = document.getElementById('games');
  let gamesDisplay = '';
  if (result.length > 0) {
    const sortedArray = result.sort((a, b) => a.user.localeCompare(b.user));
    sortedArray.map((g) => {
      gamesDisplay += `
        <tr>
        <td>${g.user}: ${g.score}</td>
        </tr>
        `;
      return g;
    });
    gamesElement.innerHTML = gamesDisplay;
  } else {
    gamesElement.textContent = 'No Scores';
  }
};

export default getGames;
