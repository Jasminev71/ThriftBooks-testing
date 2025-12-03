import { expect } from '@wdio/globals';
import SearchPage from '../pageobjects/search.page.js';
import ResultsPage from '../pageobjects/results.page.js';
import BookDetails from '../pageobjects/bookDetails.page.js';
import page
 from '../pageobjects/page.js';
describe('thriftBook Smoke test', () => {
     beforeEach(async () => { 
        await page.open();
     });
        it('basic search shows results', async () => {
            await SearchPage.basicSearch();
            await ResultsPage.
})

         
})