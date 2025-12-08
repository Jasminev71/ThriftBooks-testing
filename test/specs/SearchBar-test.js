import SearchPage from '../pageobjects/search.page.js';


describe('SearchBar Tesing', () => {
   beforeEach(async () => { 
      await SearchPage.open();
      
     });
        it('Search by book title using enter key', async () => {
            await SearchPage.basicSearchKey('MistBorn');
            
        })

        it('Basic Search', async () => {
            await SearchPage.basicSearchBtn('Dracula');
        })
        
        it('Search By Author Name', async () => {
            await SearchPage.authorName('Brandon Sanderson');
           
        })
        
        it('Search by ISBN', async () => {
            await SearchPage.isbnLookUp('9780765326355');
        })
        
        it('Invalid query results', async () =>{
            await SearchPage.invaildSearch('BookTitle123') 
        })

        it('Empty Search Query', async () => {
            await SearchPage.searchSubmit('')
        })

        it('Search Bar using special Characters', async () => {
            await SearchPage.specialCharSearch('@@(#&)');
        })

        it(' Extra spacing between search query', async () => {
            await SearchPage.trailingSpaces("  Oathbringer  ");
        })

        it('Inconsistent case cap in search bar', async () => {
            await SearchPage.caseInsensitivity('OaThBRiNGer');
        })

        it('Single Character Search', async () => {
            await SearchPage.shortSearch('a');
        })
        it('Long Character Search', async () => {
            await SearchPage.longSearch('b');
        })
})
 

