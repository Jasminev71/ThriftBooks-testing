import { $,expect } from '@wdio/globals';

class SearchPage {
 get container() { return $("body")} 
 get searchField() { return $('input[placeholder="Search 19 million titles by title, author, or ISBN"]'); }
 get searchButton() { return $("#GlobalSearch button[type='submit']");}
 get clearSearchField() { return $("#GlobalSearch button[type='button']"); }
 
 async waitload() {
    await this.container.waitForDisplayed();
 }

 async basicSearch() {
    await this.searchField.waitForDisplayed();
    await this.searchField.setValue('Mistborn');
    await this.searchButton.click()
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
 }

 async isbnLookUp() {
    await this.searchField.waitForDisplayed();
    await this.searchField.setValue('9780765326355');
    await this.searchButton.click();
 }

}


export default new SearchPage(); 