import SearchPage from '../pageobjects/search.page.js'
import BookDetails from '../pageobjects/bookDetails.page.js';


describe('Format Selection Buttons work as intended', () => {
    beforeEach(async () => {
        await SearchPage.open();
        await SearchPage.isbnLookUp('9780765326355')

    })

    it('Format Selection testing', async () => {
        await BookDetails.formatSelection();
    })
})