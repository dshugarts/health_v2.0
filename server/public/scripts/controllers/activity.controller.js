myApp.controller('ActivityController', ['$http', '$location', 'UserService', 'PostDataService', function($http, $location, UserService, PostDataService) {
    // console.log('ActivityController created');
    var self = this;
    self.userService = UserService;
    self.postdataService = PostDataService;
    self.userObject = UserService.userObject;
    self.id = UserService.userObject.id;
    self.activityValuesArray = PostDataService.activityValuesArray;
    self.reportPage = PostDataService.reportPage;
    self.activityScore = PostDataService.activityScore;
    self.dates = PostDataService.dates;

    new Chart(document.getElementById("line-chart"), {
        type: 'line',
        data: {
          labels: self.dates,
          datasets: [{ 
              data: self.activityScore,
              label: "Physical Activity (min/week)",
              borderColor: "crimson",
              fill: false
        }]
        },
        options: {
          title: {
            display: true,
            text: 'My Physical Activity Readings Over Time (min/week)',
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
