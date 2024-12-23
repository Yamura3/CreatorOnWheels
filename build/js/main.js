// Main application logic
function downloadAsset(url) {
  window.open(url, '_blank');
}

function renderAssets(type) {
  const container = document.getElementById('asset-grid');
  const searchQuery = document.getElementById('search').value;
  const filteredAssets = filterAssets(searchQuery, type);
  
  container.className = type === 'thumbnails' 
    ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
    : 'grid grid-cols-1 md:grid-cols-2 gap-6';
    
  container.innerHTML = filteredAssets
    .map(asset => type === 'thumbnails' ? createThumbnailCard(asset) : createAudioCard(asset))
    .join('');
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search');
  const tabButtons = document.querySelectorAll('[data-tab]');
  let currentTab = 'thumbnails';

  searchInput.addEventListener('input', () => renderAssets(currentTab));
  
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      tabButtons.forEach(btn => btn.classList.remove('bg-blue-600', 'text-white'));
      button.classList.add('bg-blue-600', 'text-white');
      currentTab = button.dataset.tab;
      renderAssets(currentTab);
    });
  });

  // Initial render
  renderAssets('thumbnails');
});