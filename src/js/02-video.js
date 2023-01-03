import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const video = document.querySelector('#vimeo-player');
const player = new Player(video);

const VIDEO_TIME = 'vimeo-time';

const onSaveTimeUpdate = ({ seconds } = 0) => {
  localStorage.setItem(VIDEO_TIME, seconds);
};

const getVideoPlayerCurrentTime = () => {
  return localStorage.getItem(VIDEO_TIME);
};

player.setCurrentTime(getVideoPlayerCurrentTime()).catch(function (err) {
  switch (err.name) {
    case 'RangeError':
      break;
    default:
      break;
  }
});

player.on('timeupdate', throttle(onSaveTimeUpdate, 1000));
