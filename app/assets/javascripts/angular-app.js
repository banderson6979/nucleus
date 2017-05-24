"use strict";

window.nucleus = angular.module('Nucleus', ['ngResource']);

window.nucleus.config([
  "$httpProvider", function($httpProvider) {
    $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
  }
]);
