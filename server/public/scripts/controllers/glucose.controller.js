myApp.controller('GlucoseController', ['$http', '$location', 'UserService', 'PostDataService', function($http, $location, UserService, PostDataService) {
    // console.log('GlucoseController created');
    var self = this;
    self.userService = UserService;
    self.postdataService = PostDataService;
    self.userObject = UserService.userObject;
    self.id = UserService.userObject.id;
    self.gluValuesArray = PostDataService.gluValuesArray;
    self.reportPage = PostDataService.reportPage;
    self.gluScore = PostDataService.gluScore;
    self.dates = PostDataService.dates;
 



    new Chart(document.getElementById("line-chart"), {
        type: 'line',
        data: {
          labels: self.dates,
          datasets: [{ 
              data: self.gluScore,
              label: "Glucose",
              borderColor: "crimson",
              fill: false
        }]
        },
        options: {
          title: {
            display: true,
            text: 'My Glucose Readings Over Time',
            position: 'bottom'
          },
          legend: {
              position: 'bottom'
          },
          layout: {
            padding: {
              top: 10
            }
          }, 
          gridLines: {
            lineWidth: 3
          }
        }
      });

}]);
