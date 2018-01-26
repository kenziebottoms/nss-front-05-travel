"use strict";

angular.module("guide").controller("BookCtrl", function($scope, $q, $http) {
    $q((resolve, reject) => {
        $http.get("/data/guides.json").then(response => {
            $scope.guides = response.data.guides;
        })
    });
});