import {When} from "cucumber"
import {parseExcel} from "../util/readExcel";

When(/^I set "([^"]*)?" to the inputfield "([^"]*)?"$/, async(text, selector)=> {
const data = parseExcel()[text];

const element = await $('~' + selector);
await element.setValue(data);
} )

When(/^I clear the inputfield "([^"]*)?"$/, async(selector)=> {    
    const element = await $('~' + selector);
    await element.clearValue();
    } )