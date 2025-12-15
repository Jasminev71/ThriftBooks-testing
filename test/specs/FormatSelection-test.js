import SearchPage from '../pageobjects/search.page.js'
import BookDetails from '../pageobjects/bookDetails.page.js';


describe('Format Selection Buttons work as intended', () => {
    beforeEach(async () => {
        await SearchPage.HomePage();
        await SearchPage.isbnSearch('9780765326355')

    })

    it('Format Selection testing: Format buttons are all pressable', async () => {
        await BookDetails.formatSelection();
    })
})