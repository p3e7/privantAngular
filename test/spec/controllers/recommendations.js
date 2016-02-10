var AMOUNT_EVENTS = 3;
var mockTestData = [{
        "rank": "2",
        "event": {
            "id": "1",
            "title": "Street Art 8 Dortmund",
            "description": "Ein Festival für Künstler, Genießer und ausgefallene Straßenkunst im urbanen Raum",
            "city": "Dortmund",
            "date": "12.12.2015",
            "createdBy": "Sascha",
            "private": false,
            "createdAt": "2015-08-01",
            "maxUser": "6",
            tags: ["art", "street", "kunst"]
        }
    }, {
        "rank": "2",
        "event": {
            "id": "1",
            "title": "Street Art 8 Bochum",
            "description": "Ein Festival für Künstler, Genießer und ausgefallene Straßenkunst im innerstädischen Raum",
            "city": "Bochum",
            "date": "12.11.2015",
            "createdBy": "Sascha",
            "private": false,
            "createdAt": "2015-08-01",
            "maxUser": "6",
            tags: ["art", "street", "kunst"]
        }
    }, {
        "rank": "2",
        "event": {
            "id": "1",
            "title": "Street Art 8 Essen",
            "description": "Ein Festival für Künstler, Genießer und ausgefallene Straßenkunst im Treiben der Stadt",
            "city": "Essen",
            "date": "05.12.2015",
            "createdBy": "Sascha",
            "private": false,
            "createdAt": "2015-08-01",
            "maxUser": "6",
            tags: ["art", "street", "kunst"]
        }
    }];

describe("Recommendations Test Unit: ", function() {
    beforeEach(function(){
        module('privantAngularApp');
        inject(function(recommendationsFty){recommendationsFty.data = mockTestData;});
    });

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

      inject(function($compile, $rootScope, $templateCache, $httpBackend){
        $httpBackend.when('GET', 'http://localhost:10000/recommendations').respond(mockTestData);  
        
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
