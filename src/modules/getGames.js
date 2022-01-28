const getGames = () => {
  const url =
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/fxcnsYcJrkT4mY83CQhy/scores/';

  const fetchGames = async () => {
    const res = await fetch(url, { method: 'GET' });
    const result = await res.json();
    return result;
  };
  fetchGames().then((game) => {
    console.log(game);
  });
};

export default getGames;
