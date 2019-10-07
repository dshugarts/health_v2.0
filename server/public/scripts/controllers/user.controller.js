myApp.controller('UserController', ['$location', 'UserService', 'DataService', 'ScoringService', function($location, UserService, DataService, ScoringService) {
  console.log('UserController created');
  var self = this;
  self.userService = UserService;
  self.DataService = DataService;
  self.ScoringService = ScoringService;
  self.userObject = UserService.userObject;
//  self.dataArray = ScoringService.dataArray;
  id = UserService.userObject.id;
//  self.myScore = ScoringService.myScore;
  
self.newData = function(){
    $location.url('/data_entry');
}

  
 const sectors = [{
  color : "red",
      lo : 0,
      hi : 49.9
                },{
      color : "gold",
      lo : 50,
      hi : 69.9
    },{
      color : "green",
      lo : 70,
      hi : 100
    }];

  var g = new JustGage({
    id: "gauge",
    value: ScoringService.myScore,
    min: 0,
    max: 100,
    customSectors: sectors,
    pointer: true,
    pointerOptions: {
      toplength: -12,
      bottomlength: 50,
      bottomwidth: 8,
      color: 'black',
    },
    gaugeWidthScale: 0.5,
    title: "My Wellness Score",
    label: "Wellness Points Earned"
  });


}]);
