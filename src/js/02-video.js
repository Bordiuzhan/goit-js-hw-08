import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo(iframe);
const timeRecovery = JSON.parse(
  localStorage.getItem('videoplayer-current-time')
);

player.on('timeupdate', throttle(onPlayTime, 1000));
player.setCurrentTime(timeRecovery);

function onPlayTime(e) {
  const currentTime = JSON.stringify(e.seconds);
  localStorage.setItem('videoplayer-current-time', currentTime);
}
