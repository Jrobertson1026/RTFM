var app = angular.module('rtfmApp', ['firebase', "ngRoute"]);

app.constant('fb', {
  url: "https://first-chatroom-demo.firebaseio.com/"
})
app.config(function($routeProvider) {
  $routeProvider
    .when("/login", {
      templateUrl: 'login/login.html',
      controller: "loginCtrl"
    })
    .when("/threads", {
      templateUrl: "/threads/threads.html",
      controller: "threadsCtrl",
      resolve: {
        threadsRef: function(threadService) {
          return threadService.getThreads();
        }

      }

    })
    .when('/thread/:threadId', {
      templateUrl: 'threads/thread.html',
      controller: 'threadCtrl',
      resolve: {
        threadRef: function(threadService, $route) {
          return threadService.getThread($route.current.params.threadId);
        },
        commentsRef: function(threadService, $route) {
          return threadService.getComments($route.current.params.threadId);
        }
      }
    })

  .otherwise({
    redirectTo: "/login"
  })
});
