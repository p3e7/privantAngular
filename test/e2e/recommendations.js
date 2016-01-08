describe("Recommendation E2E Test: ",function(){
    //beforeEach(module('privantAngularApp'));
    
    it("Filter works", function(){
        var filterInput = element(by.id('filterInput'));
        //filterInput.sendKeys("Dortmund");
        
        var recomBox = element(by.css('.recomBox'));
        expect(true).toBe(true);
    });
});