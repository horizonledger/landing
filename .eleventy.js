let Nunjucks = require("nunjucks");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("css");

    eleventyConfig.addPassthroughCopy("assets");

    eleventyConfig.setTemplateFormats(["html", "njk", "md"]);

    let nunjucksEnvironment = new Nunjucks.Environment(
        new Nunjucks.FileSystemLoader("src/_includes")
    );

    eleventyConfig.setLibrary("njk", nunjucksEnvironment);

    return {
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dir: {
            input: "src",
            output: "site",
        },
    };
};
