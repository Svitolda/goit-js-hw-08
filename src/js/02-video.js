import player from "@vimeo/player";
import throttle from "lodash.throttle";

const currentTimeStorage = "videoplayer-current-time";

const iframe = document.querySelector("iframe");
const player = new Vimeo.Player(iframe);

player.on('timeUpdate', throttle(onPlay, 1000));

function onPlay (event) {
    // data is an object containing properties specific to that event
    localStorage.setItem(currentTimeStorage, event.seconds)
};
    setCurrentTime();
    function setCurrentTime() {
        if (!localStorage.getItem(currentTimeStorage)) {
            return;
        }
        player.setCurrentTime(localStorage.getItem(currentTimeStorage));
    }
player.on('play', onPlay);




