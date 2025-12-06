// test/pageobjects/results.page.js
import { $, expect } from '@wdio/globals';
import Page from './page.js';

class ResultsPage extends Page {
    get selectedDisplay() {
        return $('//div[.//h3[normalize-space()="Selected"]]');
    }

    get clearBtn() {
        return this.selectedDisplay.$('//a[contains(.,"Clear")]');
    }

    get resultHeader() {
        return $('.Search-sortBar-results');
    }

    // TODO: fill these in later when you know the selectors
    // get booksTag() { return $('...') }
    // get formatTag() { return $('...') }
    // get conditionTag() { return $('...') }

    async filterTagsVisible() {
        await this.selectedDisplay.waitForDisplayed();
    }

    async clearAll() {
        await this.clearBtn.waitForClickable();
        await this.clearBtn.click();

        // TEMP: comment this out until you implement the tag locator properly
        // await expect(this.tag("Show Out Of Stock Items")).not.toBeDisplayed()
    }

    async clearOneFilter() {
        // TODO: implement clearing a single tag via its "x" icon
    }
}

export default new ResultsPage(); 