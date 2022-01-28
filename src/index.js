import './style.css';
import createGame from './modules/createGame.js';
import getGames from './modules/getGames.js';

const createGameBtn = document.getElementById('gameBtn');
createGameBtn.addEventListener('click', createGame);

const refreshBtn = document.getElementById('refresh');
refreshBtn.addEventListener('click', getGames);

document.addEventListener('DOMContentLoaded', getGames);