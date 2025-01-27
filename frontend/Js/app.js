/* eslint-disable no-undef */
const myApp = angular.module("MediumAPI-app", ["ui.router", "ui.bootstrap"]);
const baseUrl = "http://localhost:5500";

console.log(myApp, "MediumAPI-app");

myApp.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");
  $stateProvider.state("home", {
    url: "/",
    templateUrl: "../views/home.html",
    controller: "HomeController"
  });
});

const isAuthorized = ($state, $rootScope) => {
  const isLogged = localStorage.getItem("token");
  console.log("Verificando autorização - Token:", isLogged);
  if (!isLogged) {
    $state.go("login");
    return;
  }
  $rootScope.isLogged = true;
};
