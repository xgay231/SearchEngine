---
layout: layouts/project.njk
title: Lunr
description: ""
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