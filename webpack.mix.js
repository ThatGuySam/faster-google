let mix = require('laravel-mix')

require('mix-html-builder') 

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */


// Examples
// https://github.com/JeffreyWay/laravel-mix/blob/master/setup/webpack.mix.js

mix.browserSync({ // eslint-disable-line no-sync
    proxy: false,
    single: true,
    server: {
        baseDir: './public'
    }
})

mix.copy('static', 'public')

mix.html({
    htmlRoot: './src/index.html', // Your html root file(s)
    output: 'public', // The html output folder
    partialRoot: './src/partials',    // default partial path
    // layoutRoot: './src/layouts',    // default partial path
    minify: {
        removeComments: true,
        collapseWhitespace: true
    }
})