myApp.controller('ScoreChartController', ['$http', '$location', 'UserService', 'DataService', function($http, $location, UserService, DataService) {
  //  console.log('ScoreChartController created');
    var self = this;
    self.userService = UserService;
    self.dataService = DataService
    self.userObject = UserService.userObject;

    self.newEntry = DataService.newEntry;
    self.entryObject = DataService.entryObject;
    self.id = UserService.userObject.id;
    self.addEntry = DataService.addEntry;

    self.dashView = function() {
        $location.url('/dashboard');
    }

  }]);