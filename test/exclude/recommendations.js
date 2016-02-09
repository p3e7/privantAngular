var AMOUNT_EVENTS = 3;

describe("Recommendations Test Unit: ", function() {
    beforeEach(module('privantAngularApp'));

    it("recommendationsFty was injected", inject(function(recommendationsFty){
        expect(recommendationsFty).toBeDefined();
    }));

    it("recommendationsFty containts the expected data", inject(function(recommendationsFty){
        expect(recommendationsFty.data.length).toEqual(AMOUNT_EVENTS);
        expect(recommendationsFty.search.length).toBe(0);
    }));

    it("filterRecommendations works", inject(function(recommendationsFty, $filter){
        expect(recommendationsFty).toBeDefined();

        // checks if the filter works in general
        var notFiltered = $filter('filterRecommendations')(recommendationsFty.data);
        expect(notFiltered.length).toBe(AMOUNT_EVENTS);

        // defines the expected output for a later on deep-comparison (toEqual)
        var filteredExpected = [recommendationsFty.data[0]];
        recommendationsFty.search = ["Dortmund"];
        var filtered = $filter('filterRecommendations')(recommendationsFty.data);
        expect(filtered).toEqual(filteredExpected);

    }));
});

describe("Recommendation Directive Test Unit: ", function(){
    var compile, scope, directiveElem, fty;

    beforeEach(function(){
      module('privantAngularApp');

      angular.mock.module('templates');

      inject(function($compile, $rootScope, $templateCache){
        // extends the automatically cached template (thus the test is more agile)
        var tmpl = $templateCache.get('scripts/sd-recommendations/sd-recommendation.html');
        var controllerTmpl = "<div ng-controller='recommendationsCtrl'>"+tmpl+"</div>";
        $templateCache.put('scripts/sd-recommendations/sd-recommendation.html', controllerTmpl);

        compile = $compile;
        scope = $rootScope.$new();
      });

      directiveElem = getCompiledElement();
    });

    function getCompiledElement(){
      var element = angular.element('<sd-recommendations></sd-recommendations>');
      var compiledElement = compile(element)(scope);
      scope.$digest();
      return compiledElement;
    }

    it("Contains the correct HTML", function(){
        var childDivs = angular.element(directiveElem.html()).find('div');
        expect(childDivs.children.length).toBe(AMOUNT_EVENTS);
    });
});
