import SearchPage from '../pageobjects/search.page';


describe('SearchBar Tesing', () => {
   beforeEach(async () => { 
      await SearchPage.open();
     })
       it('Search testing using: search button, enter key, and clear fields', async () => {
        await SearchPage.runSearchTests()
       })
      it('Search using ISBN: search button, enter key, and clear fields', async () => {
         await SearchPage.basicSearch('014143984X')
      })
})
 

