const searchClient = algoliasearch(
    '948WZAR6HZ',
    '109d6a2c0439fb03fab1a519fa8bff25'
  );
  
  const index = searchClient.initIndex('search_engine');
  
  const searchInput = document.getElementById('search-input');
  const searchButton = document.getElementById('search-button');
  const searchResults = document.getElementById('search-results');
  
  searchButton.addEventListener('click', async () => {
    const query = searchInput.value;
  
    const { hits } = await index.search(query);
  
    searchResults.innerHTML = ''; // 清空之前的搜索结果
  
    if (hits.length > 0) {
      hits.forEach(hit => {
        const resultElement = document.createElement('div');
        resultElement.innerHTML = `
          <h3><a href="${hit.url}">${hit.title}</a></h3>
          <p>${hit.content.substring(0, 150)}...</p>
        `;
        searchResults.appendChild(resultElement);
      });
    } else {
      searchResults.innerHTML = '<p>没有找到结果。</p>';
    }
  });