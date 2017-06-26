/**
 * Created by goyalnik on 5/18/2017.
 */
var carousel = angular.module("directives.mycarousel", [

]);

carousel.directive("myCarousel", [ "$interval", "$timeout",
    function($interval, $timeout){
        var directive = {
            restrict: "AE",
            templateUrl: "directives/carousel/carousel.tpl.html",
            scope: {
                cData: "=carouselData",
                shouldShowCaption: "=?shouldShowCaption",
                showSlideNumber: "=?showSlideNumber",
                showNavigators: "=?showNavigators",
                showBullets: "=?showBullets"
            },
            link: function($scope, element, attr){
                var slideIndex = 0;
                var timerForSlider = 3000;
                var autoLoop = true;

                $scope.carouselData = [];

                var showSlide = function(slideNumber){
                    var totalSlides = $scope.carouselData.length;

                    if(totalSlides === 0){
                        return;
                    }

                    if(slideNumber < 0){
                        slideNumber = -slideNumber;
                    }

                    slideIndex = slideNumber % totalSlides;

                    var slides = document.getElementsByClassName("mySlides");

                    for (var i = 0; i < slides.length; i++) {
                        if(slides[i]){
                            slides[i].style.display = "none";
                        }
                        
                        if(slides[slideIndex]){
                            slides[slideIndex].style.opacity = "0";
                        }
                    }

                    if(slides[slideIndex]){
                        slides[slideIndex].style.display = "block";
                        slides[slideIndex].style.opacity = "1";
                    }
                };

                /**
                 * it will take the attribute name and check if that attribute is passed from the user directive or
                 * not.
                 *
                 * @param attrName
                 * @returns {boolean}
                 *
                 * Return values
                 * =============
                 * true: if the value is passed by the user.
                 * false: if the value is not passed by the user.
                 *
                 */
                var isAttrPresent = function(attrName){
                    if(attr[attrName]){
                        return true;
                    }
                    else {
                        if(attr[attrName] === false){
                            return true;
                        }

                        return false;
                    }
                };

                /**
                 * it will check if the attribute name is present or not. In case, it is present, it will return the
                 * value of the attribute. Otherwise, it will return the default value of the attribute. In case if
                 * the default value is also not passed to this function, it will return false.
                 *
                 * @param attrName
                 * @param defaultValue
                 * @returns {boolean}
                 *
                 * Return Values
                 * =============
                 * true: if the attribute is present and has the value true or the attribute is not present and the
                 *       default value is true.
                 * false: in all other cases.
                 *
                 */
                var ensurePresenceOfBoolean = function(attrName, defaultValue){
                    if(!defaultValue){
                        defaultValue = false;
                    }

                    if(isAttrPresent(attrName)){
                        switch(attr[attrName]){
                            case true:
                            case "true":
                                return true;
                            case false:
                            case "false":
                                return false;
                            default:
                                return defaultValue;
                        }
                    }

                    return defaultValue;
                };

                /**
                 * it will check if the attribute name is present or not. if it is not present, it will return the
                 * default value provided. if it is present, then it will check if the value provided is number or
                 * not. If it is not a number, again the default value is returned. Otherwise, the number that is
                 * present is returned.
                 *
                 * @param attrName
                 * @param defaultValue
                 */
                var ensurePresenceOfNumber = function(attrName, defaultValue){
                    if(!defaultValue){
                        defaultValue = 0;
                    }

                    if(isAttrPresent(attrName)){
                        if(isNaN(attr[attrName])){
                            return defaultValue;
                        }

                        return attr[attrName];
                    }

                    return defaultValue;
                };

                var refineCarouselData = function(){
                    if(!isAttrPresent("carouselData")){
                        $scope.carouselData = [];
                        return;
                    }

                    $scope.shouldShowCaption = ensurePresenceOfBoolean("shouldShowCaption", false);
                    $scope.showSlideNumber = ensurePresenceOfBoolean("showSlideNumber", false);
                    $scope.showNavigators = ensurePresenceOfBoolean("showNavigators", true);
                    $scope.showBullets = ensurePresenceOfBoolean("showBullets", true);
                    autoLoop = ensurePresenceOfBoolean("autoLoop", true);
                    timerForSlider = ensurePresenceOfNumber("autoLoopTimer", 3000);

                    if(!Array.isArray($scope.cData)){
                        $scope.carouselData = [];
                        return;
                    }

                    for(var i= 0,n = $scope.cData.length; i<n ;++i){
                        var temp = $scope.cData[i];

                        if(temp.src){
                            $scope.carouselData.push(temp);
                        }
                    }

                    autoChangeSlides();
                };

                var autoChangeSlides = function(){
                    if(autoLoop){
                        $interval(function(){
                            $scope.plusSlides(1);
                        }, timerForSlider);
                    }
                };

                $scope.plusSlides = function(stepSlide){
                    showSlide(slideIndex + stepSlide);
                };

                $scope.currentSlide = function(slideIndex){
                    showSlide(slideIndex);
                };

                var onRegister = function(){
                    refineCarouselData();

                    $timeout(function(){
                        showSlide(slideIndex);
                    });
                };

                onRegister();
            }
        };

        return directive;
    }
]);
