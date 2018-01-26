# Wide World Travel Guides

### Recommended file structure

```
root
 |
 |--app
 |   |--controllers
 |   |   `--bookCtrl.js
 |   |
 |   |--factories
 |   |   `--guideFactory.js
 |   |
 |   `--app.js
 |
 |--data
 |   `--guides.json
 |
 |--partials
 |   `--guide-list.html
 |
 `--index.html
```

## Part 1: Controller

You will need to display all three pieces of information from [`guides.json`](data/guides.json) about each book, in any format you choose.

### Requirements

For this project you need to use Angular to list a collection of travel guides in the DOM.

Build an application that has
- [ ] One view
    - [ ] Title
    - [ ] Type
    - [ ] Price
- [ ] One controller
    - [ ] Fetch your data using an `$http` call that returns a promise.
    - [ ] Save the returned data as a property of the `$scope` object.
    - [ ] Loop through it to display the guidebook info to the user.

Here's a list of some things to include in your app in the appropriate spots:

- [ ] Directives:
  - [ ] `ng-app="<your module name>"`
  - [ ] `ng-controller="bookCtrl"`
  - [ ] `ng-repeat="book in books"`
- [ ] A call to the data folder for `guides.json` using `$http`
- [ ] Use the `$q` service to wrap your http call in a promise
- [ ] `$scope.books = <your array of guide books data>`

## Part 2: Factory

- [ ] Make a new branch called `guide-factory`  
- [ ] Separate the database interactions from the DOM interactions.
- [ ] Make your guidebook data available to your controller (and other, future controllers) by moving the `$http` call for `guides.json` from `bookCtrl.js` into `guideFactory.js`
- [ ] Inject your factory into `bookCtrl.js` as a dependency

## Part 3: Routing

- [ ] Make a new branch called `guide-routing`  
- [ ] Include the separate `angular-route` provider into `index.html`:
        ```html
        <script src="my-path-to-angular-route.min.js"></script>
        ```
- [ ] Inject it into your app as a dependency:
        ```js
        var myApp = angular.module("MyAppName", ['ngRoute']);
        ```
- [ ] Setup routing in app.js using the config method:
        ```js
        app.config(['$routeProvider'...
        ```
- [ ] Remember to remove `ng-controller` references from `index.html`. Angular-route will now handle binding controllers to partials.