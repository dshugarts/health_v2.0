myApp.controller('BMIController', ['$http', '$location', 'UserService', 'PostDataService', function($http, $location, UserService, PostDataService) {
    // console.log('BMIController created');
    var self = this;
    self.userService = UserService;
    self.postdataService = PostDataService;
    self.userObject = UserService.userObject;
    self.id = UserService.userObject.id;
    self.activityValuesArray = PostDataService.activityValuesArray;
    self.reportPage = PostDataService.reportPage;
    self.bmiScoreArray = PostDataService.bmiScoreArray;
    self.bmiScoreUse = PostDataService.bmiScoreUse;
    self.dates = PostDataService.dates;

    new Chart(document.getElementById("line-chart"), {
        type: 'line',
        data: {
          labels: self.dates,
          datasets: [{ 
              data: self.bmiScoreArray,
              label: "Body Mass Index (BMI)",
              borderColor: "crimson",
              fill: false
        }]
        },
        options: {
          title: {
            display: true,
            text: 'My Body Mass Index (BMI) Readings Over Time',
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
