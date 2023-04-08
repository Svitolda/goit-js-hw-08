import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const CURRENT_TIME = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));
function onPlay(event) {
  localStorage.setItem(CURRENT_TIME, event.seconds);
}

  player.setCurrentTime(localStorage.getItem(CURRENT_TIME)|| 0);


 