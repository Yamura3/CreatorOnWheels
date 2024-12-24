// Search functionality
function filterAssets(query, type) {
  const items = assets[type] || [];
  if (!query) return items;
  
  const searchTerm = query.toLowerCase();
  return items.filter(item => 
    item.title.toLowerCase().includes(searchTerm) ||
    item.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  );
}