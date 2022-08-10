import Player from '@vimeo/player';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const throttle = require('lodash.throttle');
const LOCAL_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(saveLocal, 1000));

function saveLocal({ seconds }) {
  localStorage.setItem(LOCAL_KEY, seconds);
}

const savedTime = localStorage.getItem(LOCAL_KEY);

if (localStorage.getItem(LOCAL_KEY)) {
  player.setCurrentTime(savedTime);
}
