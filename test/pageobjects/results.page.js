// test/pageobjects/results.page.js
import { $, expect } from '@wdio/globals';
import Page from './page';

class ResultsPage extends Page {
    get selectedDisplay() {
        return $('//div[.//h3[normalize-space()="Selected"]]');
    }

    get clearBtn() {
        return this.selectedDisplay.$('//a[contains(.,"Clear")]');
    }

    get resultHeader() {
        return $('.Search-sortBar-results');
    }

    get searchResultsTag() {
      return $("//div[@class='Search-tag' and contains(normalize-space(), 'the hobbit')]") 

    }
    get productTypeTag() {
      return $("//label[contains(@class,'Checkbox')][.//span[normalize-space()='Books']]//input")
    }

    get productTypeTagdisplayed() {
        return $("//div[@class='Search-tag' and contains(normalize-space(), 'Books')]") 

    }


    get genreTypeTag() {
        return $("//label[contains(@class,'Checkbox')][.//span[normalize-space()='Fantasy']]//input")

    }

    get genreTypeTagDisplayed() {
        return $("//div[@class='Search-tag' and contains(normalize-space(), 'Fantasy')]") 

    }

    get selectedSection() {
        return $('.Search-filterGroup-title' )
    }

    async open() {
        return super.open('/browse/?b.search=the%20hobbit#b.s=mostPopular-desc&b.p=1&b.pp=50&b.oos&b.tile')
    }
    

    async filterTagsVisible() {
        await this.selectedDisplay.waitForDisplayed();
    }

    async clearAll() {
        await this.clearBtn.waitForClickable();
        await this.clearBtn.click();

    }

    async clearOneFilter() {
      
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

    async addMultipleTags() {
        await this.productTypeTag.waitForClickable()
        await this.genreTypeTag.waitForClickable()
        await this.productTypeTag.click()
        await this.genreTypeTag.click()
    }
}

export default new ResultsPage(); 