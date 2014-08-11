## Example Boilerplate

This is an example Boilerplate for using Angular, Gulp, Browserify and a local webserver with LiveReload.

This code is found from the part of the blog post at http://mindthecode.com/lets-build-an-angularjs-app-with-browserify-and-gulp

I did a couple modication

1. I need browserify to also work with bower. Therefore, I added debowerify.
https://github.com/eugeneware/debowerify

2. debowerify is great, but the tricky part. 

  Angular is required from bower, not npm

  so if you require from npm, you do --- var angular = require('angular');
  if you require from bower, you should do var _angular = require('angular'); Otherwise angular will be empty object


## Installation

    git clone https://github.com/Hyra/angular-gulp-browserify-livereload-boilerplate/ example-app

    cd example-app

    npm install

    gulp dev

    
