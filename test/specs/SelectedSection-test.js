import ResultsPage from '../pageobjects/results.page.js'
import SearchPage from '../pageobjects/search.page.js'


describe('Automation testing for Selction section of Thriftbooks.com', () => {
    beforeEach(async () => {
        await SearchPage.open()
        await ResultsPage.open('The hobbit')
    })
    
    it('selected section displays search query', async () => {
        await ResultsPage.selectedSectionVisible()
        await ResultsPage.searchResults()

    
    })

    it('Remove Single filter', async () => {
        await ResultsPage.clearOneFilter()
    
    })

    it('remove all filters', async() => {
        await ResultsPage.clearAll()
    })

})
