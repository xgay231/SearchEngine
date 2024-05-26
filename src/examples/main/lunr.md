---
layout: layouts/project.njk
title: Lunr
description: "基于 JavaScript 的本地搜索库，需要集成到网站或应用中，并在客户端浏览器中运行。"
---
<div class="field">
    <label for="searchField">Search</label>
    <input type="search" placeholder="Search..." id="searchField">
  </div>
  <ol id="searchResults"></ol>
  <div id="noResultsFound" style="display: none">
    <p>No results found.</p>
  </div>
  <script
  type="text/javascript"
  src="https://cdnjs.cloudflare.com/ajax/libs/elasticlunr/0.9.6/elasticlunr.min.js"
></script>
