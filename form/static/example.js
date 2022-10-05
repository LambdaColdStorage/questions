let app = angular.module("lambda", []);

app.config(function ($interpolateProvider) {
  $interpolateProvider.startSymbol("[[").endSymbol("]]");
});

app.controller("SignUpFormController", function ($scope, $controller, $http) {
  $http.defaults.xsrfCookieName = "csrftoken";
  $http.defaults.xsrfHeaderName = "X-CSRFToken";

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
    if ($scope.account.email && /\S+@\S+\.\S+/.test($scope.account.email)) {
      $http
        .post(
          "/api/is-email-taken",
          JSON.stringify($scope.account.email),
          "json"
        )
        .then(
          function (r) {
            if (r.data.is_taken) {
              $scope.errors.email = "That email is taken";
            } else {
              $scope.errors.email = null;
            }
          },
          function (r) {}
        );
    } else {
      $scope.errors.email = "That's not a valid email address";
    }
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

  $scope.signUp = function () {
    $http.post("/api/users", JSON.stringify($scope.account), "json").then(
      function (r) {
        $scope.errors = r.data;
      },
      function (r) {
        $scope.errors = r.data.errors;
      }
    );
  };
});
