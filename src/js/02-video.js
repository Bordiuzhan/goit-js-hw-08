import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo(iframe);
const timeRecovery = localStorage.getItem('videoplayer-current-time');
player.on('timeupdate', throttle(onPlayTime, 1000));

if (localStorage.length !== 0) {
  player.setCurrentTime(JSON.parse(timeRecovery));
}

function onPlayTime(e) {
  const currentTime = e.seconds;
  localStorage.setItem('videoplayer-current-time', JSON.stringify(currentTime));
}
