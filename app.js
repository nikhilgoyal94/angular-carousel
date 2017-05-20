/**
 * Created by goyalnik on 5/16/2017.
 */
var app = angular.module("myApp", [
    "ui.router",
    "ui.bootstrap",
    "sections.home"
]);

app.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', '$provide',
    function ($stateProvider, $urlRouterProvider, $httpProvider, $provide) {
        $urlRouterProvider.otherwise('/home');
    }
]);

app.controller("myCtrl", [ "$scope",
    function($scope){
        $scope.rightMenuItems = [];
        $scope.leftMenuItems = [];

        $scope.showRightMenuSmallScreen = false;
        $scope.isLeftMenuShowing = false;

        var setView = function(){
            $scope.showCarousel = false;
            updateMenu();
        };

        var updateMenu = function(){
            updateLeftMenu();
            updateRightMenu();
        };

        var updateLeftMenu = function(){
            $scope.leftMenuItems = [];

            $scope.leftMenuItems.push({
                name: "Dog"
            });

            $scope.leftMenuItems.push({
                name: "Cat",
                isSubmenuShowing: false,
                subMenus: [
                    {
                        name: "Eatables"
                    },
                    {
                        name: "Drawables",
                        isSubmenuShowing: false,
                        subMenus: [
                            {
                                name: "Dog's Food"
                            },
                            {
                                name: "Cat's Food"
                            }
                        ]
                    }
                ]
            });

            $scope.leftMenuItems.push({
                name: "Horse"
            });
        };

        var updateRightMenu = function(){
            $scope.rightMenuItems = [];

            $scope.rightMenuItems.push({
                name: "Login"
            });

            $scope.rightMenuItems.push({
                name: "Signup"
            });

            $scope.rightMenuItems.push({
                name: "Track Order"
            });

            $scope.rightMenuItems.push({
                name: "24X7 Customer Care"
            });
        };

        $scope.toggleRightMenuSmallScreen = function(){
            $scope.showRightMenuSmallScreen = !$scope.showRightMenuSmallScreen;
        };

        $scope.toggleLeftMenu = function(){
            $scope.isLeftMenuShowing = !$scope.isLeftMenuShowing;
        };

        $scope.onMenuClick = function(menuItem){
            if(menuItem.subMenus && menuItem.subMenus.length === 0){
                // no sub menu
            }
            else{
                // with sub menu
                menuItem.isSubmenuShowing = !menuItem.isSubmenuShowing;
            }
        };

        var onRegister = function(){
            setView();
        };

        onRegister();
    }
]);