// Get Our Elements

const player = document.querySelector('.player');
// console.log(player);
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
// console.log(toggle);
const skipButtons = player.querySelectorAll('[data-skip]');
// console.log(skipButtons);
const ranges = player.querySelectorAll('.player__slider');
// console.log(ranges);

//Build out functions

function togglePlay() {

    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }

    //another entry
    // const method = video.paused ? 'play' : 'pause';
    // video[method]();
};


//Hook up the event listeners