let app = angular.module("lambda", []);

app.config(function ($interpolateProvider) {
  $interpolateProvider.startSymbol("[[").endSymbol("]]");
});

app.controller("SignUpFormController", function ($scope, $controller, $http) {
  $scope.init = function () {
    document.getElementById("first-name-input").focus();
    $scope.account = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    };
    $scope.errors = {
      first_name: null,
      last_name: null,
      email: null,
      password: null,
    };
  };

  $scope.setFirstNameErrors = function () {
    if (!$scope.account.first_name) {
      return;
    }
    let errors = "First name must be at least 2 characters";
    if ($scope.account.first_name.length >= 2) {
      errors = null;
    }
    $scope.errors.first_name = errors;
  };

  $scope.setLastNameErrors = function () {
    if (!$scope.account.last_name) {
      return;
    }
    let errors = "Last name must be at least 2 characters";
    if ($scope.account.last_name.length >= 2) {
      errors = null;
    }
    $scope.errors.last_name = errors;
  };

  $scope.setEmailErrors = function () {
    if (!$scope.account.email) {
      return;
    }
    let errors = "Enter a valid email";
    if ($scope.account.email && /\S+@\S+\.\S+/.test($scope.account.email)) {
      errors = null;
    }
    $scope.errors.email = errors;
  };

  $scope.setPasswordErrors = function () {
    if (!$scope.account.password) {
      return;
    }
    let errors = "Must be at least 10 characters";
    if ($scope.account.password.length >= 10) {
      errors = null;
    }
    $scope.errors.password = errors;
  };
});
