import {Then} from "cucumber";
import {parseExcel} from "../util/readExcel";

const assert = require('assert');
Then(/^I expect that element "([^"]*)?" does  exist$/, async (selector)=>
{
    console.log(selector)
    const element =   await $('~' + selector);
    assert.equal(await element.getText(), 'Step One')
})

Then(/^I expect that element "([^"]*)?" contains the text "([^"]*)?"$/, async (selector, text)=>
{
    console.log(selector)
    const data = parseExcel()[text];
    const element =   await $('~' + selector);
    assert.equal(await element.getText(), data)
})

Then(/^I expect that element "([^"]*)?" not contains any text$/, async (selector)=>
{
    const element =   await $('~' + selector);
    assert.equal(await element.getText(), '')
})
