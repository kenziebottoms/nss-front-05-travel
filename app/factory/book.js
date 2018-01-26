"use strict";

angular.module("guide").factory("BookFactory", function($q, $http) {
    let getBooks = () => {
        return $q((resolve, reject) => {
            $http.get("/data/guides.json").then(response => {
                resolve(response.data.guides);
            }).catch(err => reject(err));
        });
    };
    return { getBooks };
});