/* eslint-disable no-undef */
const myApp = angular.module("MediumAPI-app", ["ui.router", "ui.bootstrap"]);
const baseUrl = "http://localhost:3001/";

myApp.config(function ($stateProvider, $urlRouterProvider) {
  //   $urlRouterProvider.otherwise("/login");
  $stateProvider.state("home", {
    name: "home",
    url: "/home",
    templateUrl: "../views/home.html",
    controller: "HomeController"
  });
  $stateProvider.state("login", {
    name: "login",
    url: "/login",
    templateUrl: "../views/login.html",
    controller: "LoginController"
  });
  $stateProvider.state("register", {
    name: "register",
    url: "/register",
    templateUrl: "../views/register.html",
    controller: "RegisterController"
  });
});
