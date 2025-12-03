import { expect } from '@wdio/globals';
import SearchPage from '../pageobjects/search.page.js';
import ResultsPage from '../pageobjects/results.page.js';
import BookDetails from '../pageobjects/bookDetails.page.js';
import page from '../pageobjects/page.js';
import searchPage from '../pageobjects/search.page.js';
import resultsPage from '../pageobjects/results.page.js';

describe('thriftBook Smoke test', () => {
     beforeEach(async () => { 
        await page.open();
        await SearchPage.waitload();
     });
        it('basic search shows results', async () => {
            await SearchPage.basicSearch();
            await ResultsPage.filterTagsVisible();
        })
})
 
describe('SearchBar Testing', () =>{
    beforeEach(async () => { 
        await page.open();
        await SearchPage.waitload();
     });

        it('search by author name', async () => {
            await SearchPage.authorName();
            await ResultsPage.filterTagsVisible();
        })

        it('Search book using ISBN', async () => {
            await SearchPage.isbnLookUp();
            
        })

        it('Search using short query', async () => {
            await searchPage.shortSearch();
            await ResultsPage.filterTagsVisible()
            
        })

        it('Search using Long query', async () => {
            await searchPage.longSearch();
            await resultsPage.filterTagsVisible();
        })
}) 
