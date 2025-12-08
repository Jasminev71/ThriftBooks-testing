import { $, browser } from '@wdio/globals';
import Page from './page';
import ResultsPage from './results.page';

class SearchPage extends Page {
 
 get searchField() { return $('input[placeholder="Search 19 million titles by title, author, or ISBN"]'); }
 get searchButton() { return $('.header-search-submit');}
 get clearSearchField() { return $('.header-search-reset'); }
 


 async basicSearchBtn(term) {
   
    await this.searchField.waitForDisplayed();
    await this.searchField.setValue(term);
    await this.searchButton.click()
    await expect(ResultsPage.resultHeader).toBeDisplayed();

 }
 
 async basicSearchKey(term) {
   await this.searchField.waitForDisplayed();
   await this.searchField.setValue(term);
   await browser.keys('Enter')
   await expect(ResultsPage.resultHeader).toBeDisplayed();
 }
 
 async invaildSearch(term) {
    await this.searchField.waitForClickable();
    await this.searchField.setValue(term);
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

 async shortSearch(term) {
    await this.searchField.waitForClickable();
    await this.searchField.setValue(term)
    await this.searchButton.click();
 }

 async longSearch(term) {
    await this.searchField.waitForClickable();
    await this.searchField.setValue(term.repeat(250));
    await this.searchButton.click();
 }
 
 async authorName(term) {
    await this.searchField.waitForDisplayed();
    await this.searchField.setValue(term);
    await this.searchButton.click();
    await expect(ResultsPage.resultHeader).toBeDisplayed();
 }

 async isbnLookUp(term) {
    await this.searchField.waitForDisplayed();
    await this.searchField.setValue(term);
    await this.searchButton.click();
 }

 async specialCharSearch(term) {
   await this.searchField.waitForDisplayed();
   await this.searchField.setValue(term)
   await this.searchButton.click()
   await expect(ResultsPage.resultHeader).toBeDisplayed();
   
 }
 
 async trailingSpaces(term) {
   await this.searchField.waitForDisplayed();
   await this.searchField.setValue(term);
   await this.searchButton.click();
   await expect(ResultsPage.resultHeader).toBeDisplayed();
 }
 
 async caseInsensitivity(term) {
   await this.searchField.waitForDisplayed();
   await this.searchField.setValue(term);
   await this.searchButton.click();
   await expect(ResultsPage.resultHeader).toBeDisplayed();
 }
}


export default new SearchPage();
