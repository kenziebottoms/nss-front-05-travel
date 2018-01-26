"use strict";

angular.module("guide").controller("BookCtrl", function($scope, BookFactory) {
    BookFactory.getBooks().then(books => {
        $scope.guides = books;
    });
});