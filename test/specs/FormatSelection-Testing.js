
import BookDetails from '../pageobjects/bookDetails.page.js';
import SearchPage from '../pageobjects/search.page.js';

describe('Format Selection Buttons work as intended', () => {
    beforeEach(async () => {
        await SearchPage.open();
        await SearchPage.isbnLookUp('9780765326355')

    })

    it('Hardcover is the default', async () => {
        await BookDetails.format('Hardcover');
    })

    it('Change Default to Paperback', async () => {
        await BookDetails.format('Paperback')
    })

    it('Change to Mass Market Paperback', async() => {
        await BookDetails.format('Mass Market Paperback')
   })
 
    it('Change to Audio CD', async() => {
        await BookDetails.format('Audio CD')
   })
})