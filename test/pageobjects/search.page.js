import { $, browser } from '@wdio/globals';
import Page from './page';
import ResultsPage from './results.page';

class SearchPage extends Page {
 
 get searchField() { return $('input[placeholder="Search 19 million titles by title, author, or ISBN"]'); }
 get searchButton() { return $('.header-search-submit');}
 get clearSearchField() { return $('.header-search-reset'); }
 


 async basicSearchBtn(search1) {
   
    await this.searchField.waitForDisplayed();
    await this.searchField.setValue(search1);
    await this.searchButton.click()
    await expect(ResultsPage.resultHeader).toBeDisplayed();

 }
 
 async basicSearchKey(searchkey) {
   await this.searchField.waitForDisplayed();
   await this.searchField.setValue(searchkey);
   await browser.keys('Enter')
   await expect(ResultsPage.resultHeader).toBeDisplayed();
 }
 
 async invaildSearch(invalid) {
    await this.searchField.waitForClickable();
    await this.searchField.setValue(invalid);
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

 async shortSearch(shortID) {
    await this.searchField.waitForClickable();
    await this.searchField.setValue(shortID)
    await this.searchButton.click();
 }

 async longSearch(longID) {
    await this.searchField.waitForClickable();
    await this.searchField.setValue(longID.repeat(250));
    await this.searchButton.click();
 }
 
 async authorName(name) {
    await this.searchField.waitForDisplayed();
    await this.searchField.setValue(name);
    await this.searchButton.click();
    await expect(ResultsPage.resultHeader).toBeDisplayed();
 }

 async isbnLookUp(isbn) {
    await this.searchField.waitForDisplayed();
    await this.searchField.setValue(isbn);
    await this.searchButton.click();
 }

 async specialCharSearch(specialChar) {
   await this.searchField.waitForDisplayed();
   await this.searchField.setValue(specialChar)
   await this.searchButton.click()
   await expect(ResultsPage.resultHeader).toBeDisplayed();
   
 }
 
 async trailingSpaces(spaces) {
   await this.searchField.waitForDisplayed();
   await this.searchField.setValue(spaces);
   await this.searchButton.click();
   await expect(ResultsPage.resultHeader).toBeDisplayed();
 }
 
 async caseInsensitivity(cases) {
   await this.searchField.waitForDisplayed();
   await this.searchField.setValue(cases);
   await this.searchButton.click();
   await expect(ResultsPage.resultHeader).toBeDisplayed();
 }
}


export default new SearchPage();
