// Asset data
const musicAssets = [
  {
    id: 'music1',
    title: 'Ambient Loop',
    url: '/assets/music.mp3',
    tags: ['ambient', 'background']
  },
  // Add more music entries here
];

// Audio player state
let currentlyPlaying = null;

// Search functionality
function filterMusic(query) {
  if (!query) return musicAssets;
  const searchTerm = query.toLowerCase();
  return musicAssets.filter(music => 
    music.title.toLowerCase().includes(searchTerm) ||
    music.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  );
}

// Create music card HTML
function createMusicCard(music) {
  const id = `audio-${music.id}`;
  return `
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
      <h3 class="text-lg font-semibold mb-3 text-gray-800 dark:text-white">${music.title}</h3>
      <div class="flex items-center gap-4">
        <button onclick="togglePlay('${id}')" class="play-btn p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
          </svg>
        </button>
        <div class="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div class="progress-bar bg-blue-600 h-2 rounded-full w-0"></div>
        </div>
        <audio id="${id}" src="${music.url}"></audio>
      </div>
      <button onclick="downloadMusic('${music.url}')" 
              class="mt-4 w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded-md hover:bg-gray-200 dark:hover:bg-gray-600">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
        </svg>
        Download
      </button>
    </div>
  `;
}

// Audio playback controls
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

// Download functionality
function downloadMusic(url) {
  window.open(url, '_blank');
}

// Render music grid
function renderMusicGrid() {
  const container = document.getElementById('musiclist');
  const searchQuery = document.getElementById('search').value;
  const filteredMusic = filterMusic(searchQuery);
  
  container.innerHTML = filteredMusic.map(music => createMusicCard(music)).join('');
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search');
  searchInput.addEventListener('input', renderMusicGrid);
  renderMusicGrid();
});