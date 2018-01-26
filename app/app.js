var app = angular.module("guide", ["ngRoute"]);

app.config($routeProvider => {
    $routeProvider.
        when("/", {
            templateUrl: "/partials/guide-list.html",
            controller: "BookCtrl"
        })
        .otherwise("/");
});