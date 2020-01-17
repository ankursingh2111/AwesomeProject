/**
 * Example using the Jasmine framework.
 */

describe('App Test', () => {
    it('Should have welcome text', async () => {
      // We need to wait for the component to be visible.
      // The ~ is how we select on testId
   
    //  $('~Step1').waitForDisplayed(1000);
//await browser.waitUntil("~Welcome");
      const element = await $("~Welcome");
      expect(await element.getText()).toBe('Step One')
    });
  });