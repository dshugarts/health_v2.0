myApp.controller('DisclaimerController', ['$http', '$location', 'UserService', 'DataService', function($http, $location, UserService, DataService) {
   // console.log('DisclaimerController created');
    var self = this;
    self.userService = UserService;
    self.dataService = DataService;
    self.userObject = UserService.userObject;
    self.dataArray = DataService.dataArray;
    self.getData = DataService.getData;
    self.id = UserService.userObject.id;
    self.myScore = DataService.myScore;
    self.pScore = DataService.pScore;
    self.letPass = DataService.letPass;

  
  self.getData(self.id);

}]);