import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
console.log(player);

player.on('timeupdate', throttle(currentData, 1000));

function currentData(data) {
  const currentSeconds = data.seconds;
  localStorage.setItem('videoplayer-current-time', JSON.stringify(currentSeconds));
}

const continueView = localStorage.getItem('videoplayer-current-time');
player.setCurrentTime(continueView);
