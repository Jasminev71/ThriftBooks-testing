import { $, browser, expect } from '@wdio/globals';
import HomePage from './Home.page';


class SearchPage extends HomePage {
 
 get searchField() { return $('input[placeholder="Search 19 million titles by title, author, or ISBN"]'); }
 get searchButton() { return $('.header-search-submit'); }
 get clearSearchField() { return $('.header-search-reset'); }
 get resultHeader() {  return $('.Search-sortBar-results'); }
 get titleHeader() { return $('h1[itemprop="name"]'); }

async runSearchTests() {
   const search = ['Mistborn', 'Dracula', 'BookTitle123', 'a', 'b'.repeat(250), 'Brandon Sanderson','!)#$)@', '  Way of kings  ', 'OaTHbRinger'];
      for (const book of search ) {
            await this.searchField.waitForDisplayed();
            await this.searchField.setValue(book);
            await this.searchButton.click();
            await expect(this.resultHeader).toBeDisplayed();
            
            await this.searchField.setValue(book);
            await browser.keys('Enter');
            await expect(this.resultHeader).toBeDisplayed();

            await this.clearSearchField.click();
            await this.searchField.waitForDisplayed()
         }

      
      }

async isbnSearch(isbn) {
   await this.searchField.waitForDisplayed();
   await this.searchField.setValue(isbn)
   await this.searchButton.click();
   await expect(this.titleHeader).toBeDisplayed();
   
   await this.searchField.setValue(isbn);
   await this.clearSearchField.click();
   await this.searchField.waitForDisplayed()
   }
}


export default new SearchPage();
