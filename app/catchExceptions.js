'use strict';

process.on('uncaughtException', function(e) {
  console.log(e);
});