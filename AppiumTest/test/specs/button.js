// tests/spec/button.js
// Note that when tests are run by webdriver.io, `browser` is a global object.

// "describe" is a wrapper used to group related tests. It makes the output from the
// test reporter much easier to read through.
describe('Toggle Button', () => {

    it('should hide the text box', () => {
        // All of wdio's commands are synchronous, which means we can write them simply
        // one after another.
        $('#showHideButton').click();
        expect($('#textBox').isDisplayed()).toBe(false);
    });

    // "it" represents one test. It is best not to try to test too much inside one "it",
    // as it can make it difficult to track down the mistake if the test fails.
    it('should show the box by default', () => {
        // "expect" is the way to tell Jasmine what you are really trying to test.
        // If the expect function fails, your test will fail, and it will tell you why.
        $('#showHideButton').waitForDisplayed();
        expect($('#showHideButton').isDisplayed()).toBe(true);
    });
});