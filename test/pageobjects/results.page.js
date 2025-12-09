// test/pageobjects/results.page.js
import { $, browser, expect } from '@wdio/globals';
import Page from './page';

class ResultsPage extends Page {
    get selectedDisplay() {
        return $('//div[.//h3[normalize-space()="Selected"]]');
    }

    get clearBtn() {
        return $("//button[contains(@class,'Search-tag-close')]")
    }

    get resultHeader() {
        return $('.Search-sortBar-results');
    }

    get selectedSection() {
        return $('.Search-filterGroup-title' )
    
    }
    get searchBar() { 
        
        return $('input[placeholder="Search 19 million titles by title, author, or ISBN"]'); 
    }

    get clearAllbtn() {
        return $("//button[contains(@class,'Search-clearFilter-button')]")
    }



async open(search) {
        await this.searchBar.setValue(search);
        await browser.keys('Enter')
    }
    

    async filterTagsVisible() {
        await this.selectedDisplay.waitForDisplayed();
    }

    async clearAll() {
        await this.clearAllbtn.waitForClickable();
        await this.clearAllbtn.click();

    }

    async clearOneFilter() {
      await this.clearBtn.click()
    }

    async searchResults() {
        await expect(this.searchResultsTag).toBeDisplayed()
    }

    async addMultipleTagsVisible() {
        await expect(this.productTypeTagdisplayed).toBeDisplayed()
        await expect(this.genreTypeTagDisplayed).toBeDisplayed()
        
    }

    async selectedSectionVisible() {
        await expect(this.selectedSection).toBeDisplayed()
    }



}

export default new ResultsPage(); 