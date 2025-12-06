import { $, browser } from '@wdio/globals';
import Page from './page';
import ResultsPage from './results.page';

class SearchPage extends Page {
 
 get searchField() { return $('input[placeholder="Search 19 million titles by title, author, or ISBN"]'); }
 get searchButton() { return $('.header-search-submit');}
 get clearSearchField() { return $('.header-search-reset'); }
 


 async basicSearchBtn() {
   
    await this.searchField.waitForDisplayed();
    await this.searchField.setValue('Mistborn');
    await this.searchButton.click()
    await expect(ResultsPage.resultHeader).toBeDisplayed();

 }
 
 async basicSearchKey() {
   await this.searchField.waitForDisplayed();
   await this.searchField.setValue('Way of Kings');
   await browser.keys('Enter')
   await expect(ResultsPage.resultHeader).toBeDisplayed();
 }
 
 async invaildSearch() {
    await this.searchField.waitForClickable();
    await this.searchField.setValue('BookTitle1234');
    await this.searchButton.click();
 }

 async clearInput() {
    await this.searchField.waitForClickable();
    await this.basicSearch();
    await this.clearSearchField.click();  
 }

 async searchSubmit() {
    await this.searchField.waitForDisplayed();
    await this.searchButton.click();
    await expect(ResultsPage.resultHeader).toBeDisplayed();
 }

 async shortSearch() {
    await this.searchField.waitForClickable();
    await this.searchField.setValue('a')
    await this.searchButton.click();
 }

 async longSearch() {
    await this.searchField.waitForClickable();
    await this.searchField.setValue('b'.repeat(250));
    await this.searchButton.click();
 }
 
 async authorName() {
    await this.searchField.waitForDisplayed();
    await this.searchField.setValue('Brandon Sanderson');
    await this.searchButton.click();
    await expect(ResultsPage.resultHeader).toBeDisplayed();
 }

 async isbnLookUp() {
    await this.searchField.waitForDisplayed();
    await this.searchField.setValue('9780765326355');
    await this.searchButton.click();
 }

 async specialCharSearch() {
   await this.searchField.waitForDisplayed();
   await this.searchField.setValue('#$^*^*(=)')
   await this.searchButton.click()
   await expect(ResultsPage.resultHeader).toBeDisplayed();
   
 }
 
 async trailingSpaces() {
   await this.searchField.waitForDisplayed();
   await this.searchField.setValue('  The alloy of law  ');
   await this.searchButton.click();
   await expect(ResultsPage.resultHeader).toBeDisplayed();
 }
 
 async caseInsensitivity() {
   await this.searchField.waitForDisplayed();
   await this.searchField.setValue('oaThBrInGER');
   await this.searchButton.click();
   await expect(ResultsPage.resultHeader).toBeDisplayed();
 }
}


export default new SearchPage();
