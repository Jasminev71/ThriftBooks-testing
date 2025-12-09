import { $ } from '@wdio/globals';
import Page from './page.js';

class BookDetails extends Page {
 
format(format) { return $(`//button[contains(@class,'WorkSelector-button')][.//div[normalize-space()='${format}']]`) }

 async defaultHardcover() {
    await this.format('Hardcover').waitForDisplayed()
 }
async formatClick(format) {
    await this.format(format).click()
    await this.format(format).waitForDisplayed()
}


}

export default new BookDetails(); 
