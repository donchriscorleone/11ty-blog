import { DateTime } from 'luxon';

export default async function(eleventyConfig) {
	// Configure Eleventy
    eleventyConfig.addPassthroughCopy('./src/styles.css');
    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/admin');

    eleventyConfig.addFilter('postDate', (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    })

    eleventyConfig.addShortcode('year', () => `${new Date().getFullYear()}`);

    return {
        dir: {
            input: 'src',
            output: 'public',
        }
    }
};
