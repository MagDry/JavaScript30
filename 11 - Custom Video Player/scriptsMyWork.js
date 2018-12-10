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

function updateButton() {
    const icon = this.paused ? '►' : '❚ ❚';
    // console.log(icon);
    toggle.textContent = icon;
    // console.log('Update the butto');
};

function skip() {
    console.log(this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip);
};

function handleRangeUpdate() {
    console.log(this.value);
};


//Hook up the event listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(button => button.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));