// UI Components
function createThumbnailCard(asset) {
  return `
    <div class="bg-white rounded-lg shadow-md overflow-hidden">
      <div class="aspect-video relative overflow-hidden">
        <img src="${asset.url}" alt="${asset.title}" 
             class="object-cover w-full h-full transition-transform hover:scale-105">
      </div>
      <div class="p-4">
        <h3 class="text-lg font-semibold">${asset.title}</h3>
        <button onclick="downloadAsset('${asset.url}')" 
                class="mt-2 w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
          </svg>
          Download
        </button>
      </div>
    </div>
  `;
}

function createAudioCard(asset) {
  const id = `audio-${asset.id}`;
  return `
    <div class="bg-white rounded-lg shadow-md p-4">
      <h3 class="text-lg font-semibold mb-3">${asset.title}</h3>
      <div class="flex items-center gap-4">
        <button onclick="togglePlay('${id}')" class="play-btn p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
          </svg>
        </button>
        <div class="flex-1 bg-gray-200 rounded-full h-2">
          <div class="progress-bar bg-blue-600 h-2 rounded-full w-0"></div>
        </div>
        <audio id="${id}" src="${asset.url}"></audio>
      </div>
      <button onclick="downloadAsset('${asset.url}')" 
              class="mt-4 w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
        </svg>
        Download
      </button>
    </div>
  `;
}