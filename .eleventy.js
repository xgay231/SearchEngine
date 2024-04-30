module.exports = function (eleventyConfig) {

	eleventyConfig.addPassthroughCopy('src/assets');

	eleventyConfig.addPassthroughCopy('src/css');

	eleventyConfig.addWatchTarget('src/css');

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

	return {

		dir: {
			input: 'src',
			output: 'public',
		},

	};

};