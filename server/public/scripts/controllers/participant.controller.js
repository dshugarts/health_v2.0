myApp.controller('ParticipantController', ['$http', '$location', 'UserService', 'ScoringService', function($http, $location, UserService, ScoringService) {
    //  console.log('UpdateController created');
      var self = this;
      self.userService = UserService;
      self.scoringService = ScoringService
      self.userObject = UserService.userObject;
      self.newEntry = ScoringService.newEntry;
      self.entryObject = ScoringService.entryObject;
      self.id = UserService.userObject.id;
      self.packEntry = ScoringService.packEntry;
      stressQuestion = self.newEntry.total_stress_value;

      self.stressBlock = function(stressQuestion) {
        console.log(stressQuestion);
        if (stressQuestion === true) {
          self.stressManagement = false;
        } else {
          self.stressManagement = true;
        }
      } // end stressBlock

      self.stressCube = function(stressQuestion) {
        console.log(stressQuestion);
        if (stressQuestion === false) {
          self.stressManagement = true;
        } else {
          self.stressManagement = false;
        }
      } // end stressBlock



    }]);