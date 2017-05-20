/**
 * Created by goyalnik on 5/16/2017.
 */
var app = angular.module("myApp", [
    "directives.mycarousel"
]);

app.controller("myCtrl", [ "$scope",
    function($scope){
        $scope.carouselData = [];

        $scope.carouselData = [
            {
                src: "images/slider/1.jpg",
                caption: "Slide 1"
            },
            {
                src: "images/slider/2.jpg",
                caption: "Slide 2"
            },
            {
                src: "images/slider/3.jpg",
                caption: "Slide 3"
            },
            {
                src: "images/slider/4.jpg",
                caption: "Slide 4"
            }
        ];
    }
]);