let app = angular.module("lambda", []);

app.config(function ($interpolateProvider) {
  $interpolateProvider.startSymbol("[[").endSymbol("]]");
});

app.controller("SignUpFormController", function ($scope, $controller, $http) {
  alert("hi");
});
