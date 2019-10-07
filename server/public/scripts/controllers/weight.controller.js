myApp.controller('WeightController', ['$http', '$location', 'UserService', 'PostDataService', function($http, $location, UserService, PostDataService) {
  //  console.log('WeightController created');
    var self = this;
    self.userService = UserService;
    self.postdataService = PostDataService;
    self.userObject = UserService.userObject;
    self.id = UserService.userObject.id;
    self.getDates = PostDataService.getDates; 
    self.weightValuesArray = PostDataService.weightValuesArray;
    self.reportPage = PostDataService.reportPage;
    self.weightScore = PostDataService.weightScore;
    self.dates = PostDataService.dates;

    new Chart(document.getElementById("line-chart"), {
        type: 'line',
        data: {
          labels: self.dates,
          datasets: [{ 
              data: self.weightScore,
              label: "Weight (lbs.)",
              borderColor: "crimson",
              fill: false
            }]
        },
        options: {
          title: {
            display: true,
            text: 'My Weight Readings Over Time',
            position: 'bottom'
          },
          legend: {
              position: 'bottom'
          },
          layout: {
            padding: {
              top: 10
            }
          }
        }
      });

}]);