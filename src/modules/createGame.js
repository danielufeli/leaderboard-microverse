const createGame = (e) => {
  e.preventDefault();

  const name = document.getElementById('name');
  const score = document.getElementById('score');

  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/fxcnsYcJrkT4mY83CQhy/scores/';

  const initBody = {
    user: name.value,
    score: score.value,
  };

  const postGames = async () => {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(initBody),
    });
    const result = await res.json();
    return result;
  };
  postGames().then((game) => {
    const { result } = game;
    document.getElementById('message').innerHTML = result;
    name.value = '';
    score.value = '';
  });
};

export default createGame;
