import Player from '@vimeo/player';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
console.log(player);
player.on('timeupdate', function (data) {
  const a = data.seconds;
  localStorage.setItem('current-Time', JSON.stringify(a));
});
const b = localStorage.getItem('current-Time');
player.setCurrentTime(b);
