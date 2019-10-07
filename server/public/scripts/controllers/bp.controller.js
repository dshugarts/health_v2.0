myApp.controller('BPController', ['$http', '$location', 'UserService', 'PostDataService', function($http, $location, UserService, PostDataService) {
    // console.log('BPController created');
    var self = this;
    self.userService = UserService;
    self.postdataService = PostDataService;
    self.userObject = UserService.userObject;
    self.id = UserService.userObject.id;
    self.bpValuesArray = PostDataService.bpValuesArray;
    self.reportPage = PostDataService.reportPage;
    self.systolicScore = PostDataService.systolicScore;
    self.diastolicScore = PostDataService.diastolicScore;
    self.dates = PostDataService.dates;


    new Chart(document.getElementById("line-chart"), {
        type: 'line',
        data: {
          labels: self.dates,
          datasets: [{ 
              data: self.systolicScore,
              label: "Systolic Pressure",
              borderColor: "crimson",
              fill: false
            }, { 
              data: self.diastolicScore,
              label: "Diastolic Pressure",
              borderColor: "blue",
              fill: false
            }]
        },
        options: {
          title: {
            display: true,
            text: 'My Blood Pressure Readings Over Time',
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