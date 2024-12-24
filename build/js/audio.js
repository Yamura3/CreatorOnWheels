// Audio player functionality
let currentlyPlaying = null;

function togglePlay(audioId) {
  const audio = document.getElementById(audioId);
  const allAudios = document.querySelectorAll('audio');
  
  allAudios.forEach(a => {
    if (a.id !== audioId && !a.paused) {
      a.pause();
      updatePlayButton(a.id, false);
    }
  });

  if (audio.paused) {
    audio.play();
    updatePlayButton(audioId, true);
    currentlyPlaying = audio;
  } else {
    audio.pause();
    updatePlayButton(audioId, false);
    currentlyPlaying = null;
  }
}

function updatePlayButton(audioId, isPlaying) {
  const btn = document.querySelector(`#${audioId}`).parentElement.querySelector('.play-btn');
  btn.innerHTML = isPlaying ? pauseIcon : playIcon;
}

const playIcon = `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
</svg>`;

const pauseIcon = `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6"/>
</svg>`;