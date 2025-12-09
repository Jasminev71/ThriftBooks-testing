import ResultsPage from '../pageobjects/results.page.js'


describe.skip('Automation testing for Selction section of Thriftbooks.com', () => {
    beforeEach(async () => {
        await ResultsPage.open()
    })
    
    it('selected section displays search query', async () => {
        await ResultsPage.selectedSectionVisible()
        await ResultsPage.searchResults()

    })

    it('Selected section Honors selected fitlers', async () => {
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
