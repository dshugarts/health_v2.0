myApp.controller('WaistController', ['$http', '$location', 'UserService', 'PostDataService', function($http, $location, UserService, PostDataService) {
  //  console.log('WaistController created');
    var self = this;
    self.userService = UserService;
    self.postdataService = PostDataService;
    self.userObject = UserService.userObject;
    self.id = UserService.userObject.id;
    self.waistValuesArray = PostDataService.waistValuesArray;
    self.reportPage = PostDataService.reportPage;
    self.waistScore = PostDataService.waistScore;
    self.dates = PostDataService.dates;

    new Chart(document.getElementById("line-chart"), {
        type: 'line',
        data: {
          labels: self.dates,
          datasets: [{ 
              data: self.waistScore,
              label: "Waist Size (in.)",
              borderColor: "crimson",
              fill: false
            }]
        },
        options: {
          title: {
            display: true,
            text: 'My Waist Size Readings Over Time',
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