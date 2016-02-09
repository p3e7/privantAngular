/*Angular Example
describe('angularjs homepage todo list', function() {
  it('should add a todo', function() {
    browser.get('https://angularjs.org');

    element(by.model('todoList.todoText')).sendKeys('write first protractor test');
    element(by.css('[value="add"]')).click();

    var todoList = element.all(by.repeater('todo in todoList.todos'));
    expect(todoList.count()).toEqual(3);
    expect(todoList.get(2).getText()).toEqual('write first protractor test');

    // You wrote your first test, cross it off the list
    todoList.get(2).element(by.css('input')).click();
    var completedAmount = element.all(by.css('.done-true'));
    expect(completedAmount.count()).toEqual(2);
  });
});*/


describe('show and search events', function() {
  it('should list events and filter events', function () {
    //Verbindung aufbauen
    browser.get('http://localhost:9000/#/events');
    var events;
    //Aktuelle Anzahl an events testen
    events = element.all(by.repeater('event in pAEvents.items'));
    expect(events.count()).toEqual(4);
    //Pruefen, ob der Filter funktioniert
    element(by.id('eSearch')).sendKeys('elek');
    expect(events.count()).toEqual(1);
  });
});
