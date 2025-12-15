
import ResultsPage from '../pageobjects/results.page.js';  
import SearchPage from '../pageobjects/search.page.js';


describe('Automation testing for Selction section of Thriftbooks.com', () => {
    beforeEach(async () => {
        await SearchPage.open()
        await SearchPage.basicSearch('The Hobbit')
    })
    
    it('Format Selection picks', async () => {
        await ResultsPage.acceptCookies()
        await ResultsPage.selectionTags()
    })
});

