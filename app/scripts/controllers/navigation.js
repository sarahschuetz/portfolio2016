'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:NavigationCtrl
 * @description
 * # NavigationCtrl
 * Controller of the webApp
 */
angular.module('webApp')
  .controller('NavigationCtrl', function ($anchorScroll) {

      $anchorScroll();
      alert('asdf');
  });
