import SearchPage from '../pageobjects/search.page';


describe('SearchBar Tesing', () => {
   beforeEach(async () => { 
      await SearchPage.open();
     })
       it('Search with Search Button', async () => {
        await SearchPage.runSearchTests()
       })
      it('Search using ISBN', async () => {
         await SearchPage.isbnSearch('014143984X')
      })
})
 

