(function() {
  'use strict';
  /*
  Demonstrate how to register services
  In this case it is a simple value service
  */
  this.angular.module('hlApp.services', []).value('version', '0.1');

}).call(this);
