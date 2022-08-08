import Player from '@vimeo/player';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const throttle = require('lodash.throttle');

player.on('timeupdate', throttle(saveLocal, 1000));

function saveLocal(data) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
}

const savedTime = localStorage.getItem('videoplayer-current-time');
const parsedTime = JSON.parse(savedTime);

player.setCurrentTime(parsedTime.seconds);
