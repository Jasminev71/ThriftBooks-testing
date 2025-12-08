
import BookDetails from '../pageobjects/bookDetails.page.js';


describe('Format Selection Buttons work as intended', () => {
    beforeEach(async () => {
        await BookDetails.open();
    })

    it('Hardcover is the default', async () => {
        await BookDetails.hardCoverDisplayed();
    })

    it('Change Default to Paperback', async () => {
        await BookDetails.selectPaperback();
    })

    it('Change to Mass Market Paperback', async() => {
        await BookDetails.selectMassMarket()
   })
    it('Change to Digital', async() => {
        await BookDetails.selectDigital()
   })
})