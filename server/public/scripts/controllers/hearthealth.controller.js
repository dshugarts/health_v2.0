myApp.controller('HeartHealthController', ['$http', '$location', 'UserService', 'PostDataService', function($http, $location, UserService, PostDataService) {
    // console.log('HeartHealthController created');
    var self = this;
    self.userService = UserService;
    self.postdataService = PostDataService;
    self.userObject = UserService.userObject;
    self.id = UserService.userObject.id;
    self.heartHealthValuesArray = PostDataService.heartHealthValuesArray;
    self.reportPage = PostDataService.reportPage;
    self.heartHealthScore = PostDataService.heartHealthScore;
    self.dates = PostDataService.dates;



    new Chart(document.getElementById("line-chart"), {
        type: 'line',
        data: {
          labels: self.dates,
          datasets: [{ 
              data: self.heartHealthScore,
              label: "Heart Health Score",
              borderColor: "crimson",
              fill: false
            }]
        },
        options: {
          title: {
            display: true,
            text: 'My Heart Health Readings Over Time',
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