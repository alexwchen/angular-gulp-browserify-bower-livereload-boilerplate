'use strict';

/*
  Angular is required from bower, not npm

  so if you require from npm, you do --- var angular = require('angular');
  if you require from bower, you should do var _angular = require('angular'); Otherwise, angular will be empty object

*/
var _angular = require('angular'); // That's right! We can just require angular as if we were in node
var _simpleLogin = require('firebase-simple-login');


var WelcomeCtrl = require('./controllers/WelcomeCtrl'); // We can use our WelcomeCtrl.js as a module. Rainbows.

var app = angular.module('myApp', []);

app.controller('WelcomeCtrl', ['$scope', WelcomeCtrl]);
