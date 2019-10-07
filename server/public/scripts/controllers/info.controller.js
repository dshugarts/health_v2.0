myApp.controller('InfoController', ['$http', '$location', 'UserService', function($http, $location, UserService) {
  // console.log('InfoController created');
  var self = this;
  self.userService = UserService;
  self.userObject = UserService.userObject;
}]);
