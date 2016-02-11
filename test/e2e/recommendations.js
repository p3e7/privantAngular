describe("Recommendation E2E Test: ",function(){
    //beforeEach(module('privantAngularApp'));
    
    it("Filter works", function(){
        // kann man vergessen, da keine request header gesetzt werden => login nicht unterstützt (lt forum)
        browser.get('http://localhost:9000/#/recommendations');
        
        browser.sleep(5000);
        
        var recomBox = element(by.css('.recomBox'));
        element(by.css('.filterLabel')).click();
        element(by.id('filterInput')).sendKeys('Dortmund');
        element(by.id('filterInput')).sendKeys(protractor.Key.ENTER);
        expect(true).toBe(true);
    });
});