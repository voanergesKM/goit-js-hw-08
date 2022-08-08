import Player from '@vimeo/player';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', saveLocal);

function saveLocal(data) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
}

const savedTime = localStorage.getItem('videoplayer-current-time');
const parsedTime = JSON.parse(savedTime);

player.setCurrentTime(parsedTime.seconds);
