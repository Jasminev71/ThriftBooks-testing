import ResultsPage from '../pageobjects/results.page.js'


describe('Automation testing for Selction section of Thriftbooks.com', () => {
    beforeEach(async () => {
        await ResultsPage.open()
    })
    
    it.skip('selected section displays search query', async () => {
        await ResultsPage.selectedSectionVisible()
        await ResultsPage.searchResults()

    })

    it.skip('Selected section Honors selected fitlers', async () => {
        await ResultsPage.addMultipleTags()
        await ResultsPage.addMultipleTagsVisible()
    })

    it('Remove Single filter', async () => {
        await ResultsPage.clearBtn()
    })

    it('Selected Section is perserved when user uses browser back', async () => {
        await ResultsPage.filterTagsVisible()
    })
})
