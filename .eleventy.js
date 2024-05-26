const searchFilter = require("./src/filters/searchFilter");

module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy('src/assets');

    eleventyConfig.addPassthroughCopy('src/css');

    eleventyConfig.addWatchTarget('src/css');

    eleventyConfig.addCollection('posts', (collection) => {

        return collection.getFilteredByGlob('src/projects/**/*.md');

    });
    eleventyConfig.addCollection('projects', (collection) => {

        return collection.getFilteredByGlob('src/projects/main/*.md');

    });
    eleventyConfig.addCollection('seb', (collection) => {

        return collection.getFilteredByGlob('src/projects/seb/*.md');

    });
    eleventyConfig.addCollection('msb', (collection) => {

        return collection.getFilteredByGlob('src/projects/msb/*.md');

    });
    eleventyConfig.addCollection('ue', (collection) => {

        return collection.getFilteredByGlob('src/projects/ue/*.md');

    });
    eleventyConfig.addCollection('que', (collection) => {

        return collection.getFilteredByGlob('src/projects/que/*.md');

    });
    eleventyConfig.addCollection('rec', (collection) => {

        return collection.getFilteredByGlob('src/projects/rec/*.md');

    });
    eleventyConfig.addCollection('sort', (collection) => {

        return collection.getFilteredByGlob('src/projects/sort/*.md');

    });
    eleventyConfig.addCollection('examples', (collection) => {

        return collection.getFilteredByGlob('src/examples/main/*.md');

    });
    eleventyConfig.addShortcode('year', () => {

        return `${new Date().getFullYear()}`;

    });

    eleventyConfig.addFilter("search", searchFilter);

    eleventyConfig.addCollection("movies", collection => {
        return [...collection.getFilteredByGlob("./src/**/*.md")];
    });
    
	eleventyConfig.addPassthroughCopy("js");

	eleventyConfig.addFilter('jsonify', function (variable) {
		return JSON.stringify(variable);
	});

	// Remove <code>.*</code>, remove HTML, then with plain text, limit to 5k chars
	eleventyConfig.addFilter('algExcerpt', function (text) {
		//first remove code
		text = text.replace(/<code class="language-.*?">.*?<\/code>/sg, '');
		//now remove html tags
		text = text.replace(/<.*?>/g, '');
		//now limit to 5k
		return text.substring(0,5000);
	});
    // 添加 Algolia 客户端库到全局数据
    eleventyConfig.addGlobalData("algoliaAppId", "948WZAR6HZ");
    eleventyConfig.addGlobalData("algoliaSearchApiKey", "109d6a2c0439fb03fab1a519fa8bff25");
    // 将 Algolia 客户端库添加到 watch 目标，以便在文件更改时重新构建
    eleventyConfig.addWatchTarget("./src/assets/js/search.js");
    eleventyConfig.addPassthroughCopy({ "./src/assets/js/search.js": "./assets/js/search.js" });
    return {

        dir: {
            input: 'src',
            output: 'public',
        },

    };

};
