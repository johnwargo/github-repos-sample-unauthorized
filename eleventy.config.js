module.exports = eleventyConfig => {

	eleventyConfig.addPassthroughCopy("src/assets/");
	
	return {
		dir: {
			input: 'src',
			output: "_site",
			includes: "_includes",
			layouts: "_layouts",
			data: "_data"
		}
	}
};