import Player from "@vimeo/player";
import _throttle from "lodash.throttle";

const currentTimeStorage = "videoplayer-current-time";

const iframe = document.querySelector("iframe");
const player = new Vimeo.Player(iframe);

player.on('timeUpdate', throttle(onPlay, 1000));





