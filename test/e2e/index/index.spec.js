/**
 * Created by Hon on 04.01.2016.

describe("hello-protractor", function(){
  var ptor = protractor.getInstance();

  describe("index", function(){
    it("should display the correct title", function(){
      ptor.get('/#');
      expect(ptor.getTitle()).toBe('hello');
      console.log("Ausgabe");
    });
  });
});
*/
var angularHomepage = {
  nameInput : element(by.model('yourName')),
  greeting : element(by.binding('yourName')),
  get : function() {
    browser.get('index.html');
  },
  setName : function(name) {
    this.nameInput.sendKeys(name);
  }
};

// Here we are using the Jasmine test framework
// See http://jasmine.github.io/2.0/introduction.html for more details
describe('angularjs homepage', function() {
  it('should greet the named user', function(){
    angularHomepage.get();
    angularHomepage.setName('Julie');
    expect(angularHomepage.greeting.getText()).
    toEqual('Hello Julie!');
  });
});
