/* eslint-disable no-undef */
const myApp = angular.module("MediumAPI-app", ["ui.router", "ui.bootstrap"]);
const baseUrl = "http://localhost:3001";

console.log(myApp, "MediumAPI-app");

myApp.config(function ($stateProvider, $urlRouterProvider) {
//   console.log(myApp, "myApp");

  $stateProvider
    .state("home", {
      url: "/",
      templateUrl: "../views/home.html",
      controller: "HomeController"
    })
    .state("login", {
      url: "/login",
      templateUrl: "../views/login.html",
      controller: "LoginController"
    })
    .state("register", {
      url: "/login/register",
      templateUrl: "../views/register.html",
      controller: "RegisterController"
    })
    .state("page", {
      url: "/home/page",
      templateUrl: "../views/page.html",
      controller: "PageController"
    })
    .state("modal", {
      templateUrl: "views/modal.html",
      controller: "ModalPost"
    })
    .state("editModal", {
      templateUrl: "../views/EditPost.html",
      controller: "EditPostModalController"
    })
    .state("profile", {
      url: "/home/profile",
      templateUrl: "../views/profile.html",
      controller: "ProfileController"
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
