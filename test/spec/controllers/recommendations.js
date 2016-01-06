describe("Recommendations Test Unit: ", function() {
    beforeEach(module('privantAngularApp'));
    
    it("recommendationsFty was injected", inject(function(recommendationsFty){
        expect(recommendationsFty).toBeDefined();
        expect(recommendationsFty.data.length).toEqual(3);
    }));
});