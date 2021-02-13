const htmlmin = require('html-minifier')
const posthtml = require('posthtml')
const minifyClassnames = require('posthtml-minify-classnames')
const pluginInlineCss = require('@navillus/eleventy-plugin-inline-css')

module.exports = function ( eleventyConfig ) {

    // Copy static files
    eleventyConfig.addPassthroughCopy({
        "static": "/"
    })

    eleventyConfig.addPlugin(pluginInlineCss, {
        input: 'static', // look for all stylesheets relative to `./src/assets`
        cleanCss: false, // disable clean-css
        purgeCss: true
        // {
        //   defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [] // custom CSS extractor used for PurgeCSS
        // }
    })

    eleventyConfig.addTransform('htmlmin', async function(content, outputPath) {        
        // Eleventy 1.0+: use this.inputPath and this.outputPath instead
        if( outputPath.endsWith('.html') ) {
            const { html: htmlWithMiniClassnames } = await posthtml()
                .use(minifyClassnames())
                .process( content )

            // https://github.com/kangax/html-minifier#options-quick-reference
            let minified = htmlmin.minify( htmlWithMiniClassnames , {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true,
                collapseInlineTagWhitespace: true,
                minifyCSS: true
            })

            return minified
        }
    
        return content;
    })

    // console.log('eleventyConfig', eleventyConfig)



    return {
        dir: {
            input: 'src',
            output: 'dist',
            // jsDataFileSuffix: '.json',

            // Relative to input directory.
            // data: '../static',
            // layouts: '../layouts-eleventy'
        }
    }
}
