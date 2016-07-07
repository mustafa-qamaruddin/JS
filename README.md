# ES6 New Features Demo

## Usage

To view the demos start with app.html and uncomment the files one at a time.

Inside each file you will find different commented snippets with numbers preceded with #. Uncomment the snippet below each number and refresh your browser.

Make sure to toggle the console to hear the bells and whistles. I made sure to demo the different ways of doing each features. In some cases intentional mistakes were made, so that one can learn the differences.

## Transpiling

In order to run the above examples in non ES6 browsers, please install browserify

$ sudo npm install -g browserify

Then, install babelify

$ npm install babelify

Set presets to ES2015 in .babelrc

Afterwards, edit package.json to use babel for transpiling with comments set to false. Or in a single command run

$ browserify -d -e script.js -t [ babelify -- comments false ] -o bundle.js

## Production Hint

Don't include the transpiled code in production since it will be unnecessarily larger than needed. try to dynamically at run time whether to load the transpiled version or the raw ES6 version depending on the browser support.

## Questions

If it's not clear what is going on, please feel free to consult my blog [Qamar-ud-Din](http://mustafamahrous.wordpress.com)
