import SearchPage from '../pageobjects/search.page.js';


describe.skip('SearchBar Tesing', () => {
   beforeEach(async () => { 
      await SearchPage.open();
      
     });
        it('Search by book title using enter key', async () => {
            await SearchPage.basicSearchKey();
            
        })

        it('Seach by book title using Search Button', async () => {
            await SearchPage.basicSearchBtn();
        })
        
        it('Search By Author Name', async () => {
            await SearchPage.authorName();
           
        })
        
        it('Search by ISBN', async () => {
            await SearchPage.isbnLookUp();
        })
        
        it('Invalid query results', async () =>{
            await SearchPage.invaildSearch() 
        })

        it('Empty Search Query', async () => {
            await SearchPage.searchSubmit()
        })

        it('Search Bar using special Characters', async () => {
            await SearchPage.specialCharSearch();
        })

        it(' Extra spacing between search query', async () => {
            await SearchPage.trailingSpaces();
        })

        it('Inconsistent case cap in search bar', async () => {
            await SearchPage.caseInsensitivity();
        })

        it('Single Character Search', async () => {
            await SearchPage.shortSearch();
        })
        it('Long Character Search', async () => {
            await SearchPage.longSearch();
        })
})
 

