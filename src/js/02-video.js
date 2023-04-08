import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const currentTimeStorage = "videoplayer-current-time";
const iframe = document.querySelector("iframe");
const player = new Player(iframe);

player.on('timeUpdate', throttle(function () {
    player.getCurrentTime().then(function (seconds) {
        localStorage.setItem(currentTimeStorage, seconds);
    })
}, 1000));

const storedTime = localStorage.getItem(currentTimeStorage);
if (storedTime) {
    player.setCurrentTime(storedTime);
}

// const onPlay = function (evt) {
//     localStorage.setItem(currentTimeStorage, evt.seconds);
// };
// player.on('timeUpdate', throttle(onPlay, 1000));

// const currentTime = Number(localStorage.getItem(currentTimeStorage));

// player.setCurrentTime(currentTime).then(function(seconds) {
//     // seconds = the actual time that the player seeked to
// }).catch(function(error) {
//     switch (error.name) {
//         case 'RangeError':
//             // the time was less than 0 or greater than the video’s duration
//             break;

//         default:
//             // some other error occurred
//             break;
//     }
// });



