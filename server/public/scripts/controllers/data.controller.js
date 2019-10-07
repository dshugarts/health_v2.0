myApp.controller('DataController', ['$http', '$location', 'UserService', 'DataService', function($http, $location, UserService, DataService) {
    // console.log('DataController created');
    var self = this;
    self.userService = UserService;
    self.dataService = DataService
    self.userObject = UserService.userObject;

    self.newEntry = DataService.newEntry;
    self.entryObject = DataService.entryObject;
    self.id = UserService.userObject.id;

    self.addEntry = DataService.addEntry;


    self.newData = function(){
        $location.url('/update');
    }

    self.updateData = function(){
        $location.url('/modify');
    }

  }]);