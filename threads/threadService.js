var app = angular.module('rtfmApp')

app.service('threadService', function(fb, $firebase) {

  // var firebaseRef = new Firebase("https://first-chatroom-demo.firebaseio.com/");

  this.getThreads = function() {
    return new Firebase(fb.url);
  }

  this.getThread = function(threadId) {
    return new Firebase(fb.url + "/threads/" + threadId)
  }
  this.getComments = function(threadId) {
    return new Firebase(fb.url + "/threads/" + threadId + "/comments")
  }

});
