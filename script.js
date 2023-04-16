let progress = document.querySelector('#progress');
let song = document.querySelector('#song');
let control = document.querySelector('#ctrlIcon');


console.log(control.classList);

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}


function playPause() {
    if (control.classList.contains("fa-pause")){
        song.pause();
        control.classList.replace('fa-pause', 'fa-play');
    } else {
        song.play();
        control.classList.replace('fa-play', 'fa-pause');
    }
}

if(song.play()) {
    setInterval (() => {
        progress.value = song.currentTime;
    }, 1000)
}


progress.addEventListener('input', function() {
    song.pause();
    song.currentTime = progress.value;
    if (control.classList.contains("fa-pause")){
        control.classList.replace('fa-pause', 'fa-play')
    }
  });
