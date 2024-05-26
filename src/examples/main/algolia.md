---
layout: layouts/project.njk
title: Algolia
description: "SaaS (Software as a Service)，基于云端的搜索服务，即开即用，无需自己搭建和维护搜索基础设施。"
---
事实上，导航栏的搜索就是基于Algolia的~
<h2>Search</h2>
<p/>
{% raw %}
<div id="app">
	<input v-model="search" type="search"> <button @click="doSearch">Search</button>
	<div v-if="results">
		<h3>Results</h3>
		<p v-for="result in results">
			<a :href="result.url">{{result.title}}</a>
		</p>
	</div>
</div>
{% endraw %}

<script src="https://cdn.jsdelivr.net/npm/algoliasearch@4/dist/algoliasearch-lite.umd.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>

const app = new Vue({
	el:'#app',
	data: {
		search:'',
		algolia_client:null,
		algolia_index:null,
		results:null,
		numResults:null
	},
	created() {
		this.client = algoliasearch('WFABFE7Z9Q', 'd1c88c3f98648a69f11cdd9d5a87de08');
		this.index = this.client.initIndex('eleventy_test');
	},
	methods: {
		async doSearch() {
			this.results = null;
			if(this.search === '') return;
			console.log('search for '+this.search);
			let resultsRaw = await this.index.search(this.search,{
				attributesToRetrieve:['title', 'url']
			});
			console.log('results', resultsRaw);
			this.results = resultsRaw.hits;
			this.numResults = resultsRaw.nbHits;
		}
	}
})
</script>
