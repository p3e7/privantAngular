'use strict';

// encapsulates the functionalities of the directive

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RecommendationDirectiveController = (function () {
    function RecommendationDirectiveController(document, $scope, recommendationsFty) {
        _classCallCheck(this, RecommendationDirectiveController);

        this.filterTags = document.querySelector(".tags");
        this.filterInput = document.querySelector(".filterInput");
        this.recommendationsFty = recommendationsFty;

        this.document = document;
        this.scope = $scope;
        $scope.filterLabel = true;
        $scope.filterInput = false;

        // needs to be assigned angular style. Otherwise it would be needed to assign those functions explicitly after creating the object.
        $scope.labelClick = function () {
            $scope.filterLabel = false;
            $scope.filterInput = true;
            filterInput.focus();
        };

        $scope.filterInputBlur = function () {
            $scope.filterLabel = true;
            $scope.filterInput = false;
        };
        var that = this;
        this.tagClick = function (elem, evt) {
            var clickedTag = elem.target;
            var content = clickedTag.childNodes[0].data;
            clickedTag.innerHTML = "";

            var inputTag = document.createElement("input");
            inputTag.type = "text";
            inputTag.value = content;
            angular.element(inputTag).bind("keydown keypress", function (event) {
                // checks if enter was pressed
                if (event.which === 13) {
                    addFilter();

                    event.preventDefault();
                }
            });

            inputTag.onblur = function () {
                addFilter();
            };

            var addFilter = function addFilter() {
                if (inputTag.value === "") {
                    var parent = clickedTag.parentElement;
                    parent.removeChild(clickedTag);
                    $scope.$apply(recommendationsFty.search.splice(that.findPosInSearchByString(content), 1));
                } else {
                    clickedTag.innerHTML = inputTag.value;
                    // adds a delete button beside the filter
                    var filterDelete = document.createElement("span");
                    filterDelete.className = "filter-remove";
                    filterDelete.innerHTML = "X";
                    filterDelete.onclick = that.dropFilter;
                    clickedTag.appendChild(filterDelete);

                    $scope.$apply(recommendationsFty.search[that.findPosInSearchByString(content)] = inputTag.value);
                }
            };

            clickedTag.appendChild(inputTag);
        };

        this.dropFilter = function (elem) {
            var parent = elem.target.parentElement.parentElement;
            var content = elem.target.parentElement.childNodes[0].data;
            parent.removeChild(elem.target.parentElement);
            $scope.$apply(recommendationsFty.search.splice(that.findPosInSearchByString(content), 1));
        };
    }

    _createClass(RecommendationDirectiveController, [{
        key: "findPosInSearchByString",
        value: function findPosInSearchByString(str) {
            for (var i = 0; i < this.recommendationsFty.search.length; i++) {
                if (this.recommendationsFty.search[i] === str) {
                    return i;
                }
            }

            return undefined;
        }
    }]);

    return RecommendationDirectiveController;
})();

var sdr = angular.module('privantAngularApp');

sdr.factory('recommendationsFty', function ($http) {
    var factory = {};

    factory.getData = function (func) {
        $http.get('http://localhost:10000/recommendations').success(func);
    };

    factory.search = [];

    return factory;
});

sdr.controller('recommendationsCtrl', function ($scope, recommendationsFty) {
    recommendationsFty.getData(function (data) {
        $scope.data = data;
    });
});

sdr.directive('sdRecommendations', function (recommendationsFty) {
    return {
        templateUrl: 'scripts/sd-recommendations/sd-recommendation.html',
        link: function link($scope, elem, attr) {
            var ctrl = new RecommendationDirectiveController(document, $scope, recommendationsFty);

            // binds a keydown action on the filter input element
            angular.element(ctrl.filterInput).bind("keydown keypress", function (event) {
                // checks if enter was pressed
                if (event.which === 13) {
                    // adds the new filter as a span and makes the input text invisible
                    var newFilter = document.createElement("span");
                    newFilter.className = "tag";
                    angular.element(newFilter).bind('click', ctrl.tagClick);
                    newFilter.innerHTML = filterInput.value;

                    // adds a delete button beside the filter
                    var filterDelete = document.createElement("span");
                    filterDelete.className = "filter-remove";
                    filterDelete.innerHTML = "X";
                    filterDelete.onclick = ctrl.dropFilter;
                    newFilter.appendChild(filterDelete);

                    ctrl.filterInput.blur();
                    ctrl.filterTags.appendChild(newFilter);

                    $scope.$apply(recommendationsFty.search.push(filterInput.value));
                    ctrl.filterInput.value = "";

                    event.preventDefault();
                }
            });
        }
    };
});

sdr.filter('filterRecommendations', function (recommendationsFty) {
    return function (input) {
        if (input !== undefined) {
            var filtered = [];

            for (var i = 0; i < input.length; i++) {
                var added = false;
                for (var k = 0; k < recommendationsFty.search.length && !added; k++) {
                    // filters tags
                    for (var j = 0; j < input[i].event.tags.length && !added; j++) {
                        if (input[i].event.tags[j] === recommendationsFty.search[k]) {
                            filtered.push(input[i]);
                            added = true;
                        }
                    }

                    if (input[i].event.date === recommendationsFty.search[k] && !added) {
                        filtered.push(input[i]);
                        added = true;
                    }

                    if (input[i].event.description.contains(recommendationsFty.search[k]) && !added) {
                        filtered.push(input[i]);
                        added = true;
                    }

                    if (input[i].event.city === recommendationsFty.search[k] && !added) {
                        filtered.push(input[i]);
                        added = true;
                    }

                    if (input[i].event.title.contains(recommendationsFty.search[k]) && !added) {
                        filtered.push(input[i]);
                        added = true;
                    }
                }
            }

            if (recommendationsFty.search.length === 0) {
                return input;
            } else {
                return filtered;
            }
        }
    };
});

// fuck those browsers not having String.contains
if (!('contains' in String.prototype)) {
    String.prototype.contains = function (str) {
        return -1 !== String.prototype.indexOf.call(this, str);
    };
}
//# sourceMappingURL=sd-recommendation-es6.js.map
