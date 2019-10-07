myApp.controller('TRGController', ['$http', '$location', 'UserService', 'PostDataService', function($http, $location, UserService, PostDataService) {
   // console.log('TRGController created');
    var self = this;
    self.userService = UserService;
    self.postdataService = PostDataService;
    self.userObject = UserService.userObject;
    self.id = UserService.userObject.id;
    self.getChartData = PostDataService.getChartData;
    self.trgValuesArray = PostDataService.trgValuesArray;
    self.reportPage = PostDataService.reportPage;
    self.trgScore = PostDataService.trgScore;
    self.dates = PostDataService.dates;



    new Chart(document.getElementById("line-chart"), {
        type: 'line',
        data: {
          labels: self.dates,
          datasets: [{ 
              data: self.trgScore,
              label: "Triglycerides",
              borderColor: "crimson",
              fill: false
            }]
        },
        options: {
          title: {
            display: true,
            text: 'My Triglycerides Readings Over Time',
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