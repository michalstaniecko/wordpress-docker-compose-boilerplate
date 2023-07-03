const mix = require( 'laravel-mix' );

mix.js( 'src/js/index.js', 'dist/js' )
    .sass( 'src/scss/main.scss', 'dist/css' );
