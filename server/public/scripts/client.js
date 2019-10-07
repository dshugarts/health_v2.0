var myApp = angular.module('myApp', ['ngRoute']);

/// Routes ///
myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  console.log('myApp -- config')
  $routeProvider
    .when('/', {
      redirectTo: 'home'
    })
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: 'HomeController as vm',
    })
    .when('/login', {
      templateUrl: '/views/templates/login.html',
      controller: 'LoginController as vm',
    })
    .when('/resources', {
      templateUrl: '/views/templates/resources.html',
      controller: 'ResourcesController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getParticipant();
        }
      }
    })
    .when('/data_entry', {
      templateUrl: '/views/templates/data_entry.html',
      controller: 'ParticipantController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getParticipant();
        }
      }
    })
    .when('/modify_entry', {
      templateUrl: '/views/templates/modify_entry.html',
      controller: 'ReportController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getParticipant();
        }
      }
    })
    .when('/update', {
      templateUrl: '/views/templates/update.html',
      controller: 'UpdateController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getParticipant();
        }
      }
    })
    .when('/modify', {
      templateUrl: '/views/templates/modify.html',
      controller: 'ModifyController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getParticipant();
        }
      }
    })
    .when('/register', {
      templateUrl: '/views/templates/register.html',
      controller: 'LoginController as vm',
    })
    .when('/dashboard', {
      templateUrl: '/views/templates/dashboard.html',
      controller: 'UserController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getParticipant();
        }
      }
    })
    .when('/terms', {
      templateUrl: '/views/templates/terms.html',
      controller: 'SignupController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getParticipant();
        }
      }
    })
    .when('/general_info', {
      templateUrl: '/views/templates/general_info.html',
      controller: 'SignupController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getParticipant();
        }
      }
    })
    .when('/data', {
      templateUrl: '/views/templates/data.html',
      controller: 'DataController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getParticipant();
        }
      }
    })
    .when('/scoreChart', {
      templateUrl: '/views/templates/scoreChart.html',
      controller: 'ScoreChartController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getParticipant();
        }
      }
    })
    .when('/info', {
      templateUrl: '/views/templates/info.html',
      controller: 'InfoController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getParticipant();
        }
      }
    })
    .when('/glucose', {
      templateUrl: '/views/charts/glucose.html',
      controller: 'GlucoseController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getParticipant();
        }
      }
    })
    .when('/inactivity', {
      templateUrl: '/views/charts/inactivity.html',
      controller: 'InactivityController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getParticipant();
        }
      }
    })
    .when('/ldl', {
      templateUrl: '/views/charts/ldl.html',
      controller: 'LDLController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getParticipant();
        }
      }
    })
    .when('/trg', {
      templateUrl: '/views/charts/trg.html',
      controller: 'TRGController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getParticipant();
        }
      }
    })
    .when('/hearthealth', {
      templateUrl: '/views/charts/hearthealth.html',
      controller: 'HeartHealthController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getParticipant();
        }
      }
    })
    .when('/waist', {
      templateUrl: '/views/charts/waist.html',
      controller: 'WaistController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getParticipant();
        }
      }
    })
    .when('/activity', {
      templateUrl: '/views/charts/activity.html',
      controller: 'ActivityController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getParticipant();
        }
      }
    })
    .when('/report', {
      templateUrl: '/views/templates/report.html',
      controller: 'ReportController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getParticipant();
        }
      }
    })
    .when('/print_report', {
      templateUrl: '/views/templates/print_report.html',
      controller: 'ReportController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getParticipant();
        }
      }
    })
    .when('/bp_report', {
      templateUrl: '/views/reports/bp_report.html',
      controller: 'ReportController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getParticipant();
        }
      }
    })
    .when('/trg_report', {
      templateUrl: '/views/reports/trg_report.html',
      controller: 'ReportController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getParticipant();
        }
      }
    })
    .when('/bmi_report', {
      templateUrl: '/views/reports/bmi_report.html',
      controller: 'ReportController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getParticipant();
        }
      }
    })
    .when('/sleep_report', {
      templateUrl: '/views/reports/sleep_report.html',
      controller: 'ReportController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getParticipant();
        }
      }
    })
    .when('/hhs_report', {
      templateUrl: '/views/reports/hhs_report.html',
      controller: 'ReportController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getParticipant();
        }
      }
    })
    .when('/bp_resource', {
      templateUrl: '/views/resources/bp_resource.html',
      controller: 'ReportController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getParticipant();
        }
      }
    })
    .when('/inactivity_resource', {
      templateUrl: '/views/resources/inactivity_resource.html',
      controller: 'ReportController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getParticipant();
        }
      }
    })
    .when('/acsm_resource', {
      templateUrl: '/views/resources/acsm_resource.html',
      controller: 'ReportController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getParticipant();
        }
      }
    })
    .when('/stress_resource', {
      templateUrl: '/views/resources/stress_resource.html',
      controller: 'ReportController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getParticipant();
        }
      }
    })
    .when('/waist_resource', {
      templateUrl: '/views/resources/waist_resource.html',
      controller: 'ReportController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getParticipant();
        }
      }
    })
    .when('/activity_resource', {
      templateUrl: '/views/resources/activity_resource.html',
      controller: 'ReportController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getParticipant();
        }
      }
    })
    .when('/nicotine_resource', {
      templateUrl: '/views/resources/nicotine_resource.html',
      controller: 'ReportController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getParticipant();
        }
      }
    })
    .when('/sleep_resource', {
      templateUrl: '/views/resources/sleep_resource.html',
      controller: 'ReportController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getParticipant();
        }
      }
    })
    .when('/history_report', {
      templateUrl: '/views/reports/history_report.html',
      controller: 'ReportController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getParticipant();
        }
      }
    })
    .when('/nicotine_report', {
      templateUrl: '/views/reports/nicotine_report.html',
      controller: 'ReportController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getParticipant();
        }
      }
    })
    .when('/activity_report', {
      templateUrl: '/views/reports/activity_report.html',
      controller: 'ReportController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getParticipant();
        }
      }
    })
    .when('/waist_report', {
      templateUrl: '/views/reports/waist_report.html',
      controller: 'ReportController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getParticipant();
        }
      }
    })
    .when('/stress_report', {
      templateUrl: '/views/reports/stress_report.html',
      controller: 'ReportController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getParticipant();
        }
      }
    })
    .when('/inactivity_report', {
      templateUrl: '/views/reports/inactivity_report.html',
      controller: 'ReportController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getParticipant();
        }
      }
    })
    .when('/age_report', {
      templateUrl: '/views/reports/age_report.html',
      controller: 'ReportController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getParticipant();
        }
      }
    })
    .when('/acsm_report', {
      templateUrl: '/views/reports/acsm_report.html',
      controller: 'ReportController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getParticipant();
        }
      }
    })
    .when('/bmi', {
      templateUrl: '/views/charts/bmi.html',
      controller: 'BMIController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getParticipant();
        }
      }
    })
    .when('/sleep', {
      templateUrl: '/views/charts/sleep.html',
      controller: 'SleepController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getParticipant();
        }
      }
    })
    .when('/weight', {
      templateUrl: '/views/charts/weight.html',
      controller: 'WeightController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getParticipant();
        }
      }
    })
    .when('/bp', {
      templateUrl: '/views/charts/bp.html',
      controller: 'BPController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getParticipant();
        }
      }
    })
    .otherwise({
      template: '<h1>404</h1>'
    });
}]);
