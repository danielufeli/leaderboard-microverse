import './style.css';
import createGame from './modules/createGame';

const createGameBtn = document.getElementById('gameBtn');
createGameBtn.addEventListener('click', createGame);
