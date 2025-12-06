import { $ } from '@wdio/globals';
import Page from './page.js';

class BookDetails extends Page {
    get formatHardcover() { return $("//button[@type='button'])[10]")}
    get formatPaperBack() { return $("//button[@class='NewButton WorkSelector-button is-selected']")}
    get formatMassMarket() { return $("(//button[@type='button'])[12]")}
    get formatAudioCd() { return $("(//button[@type='button'])[13]")}
    get checkOutBtn() { return $("//div[@class='AddToCartButton-Desktop Button-container is-small']")}


 async defaultHardcover() {
    await this.formatHardcover.waitForDisplayed();
 }

 async selectHardcover() {
    await this.formatHardcover.waitForDisplayed();
    await this.formatHardcover.click();
 }
 async selectPaperback() {
    await this.formatPaperBack.waitForDisplayed();
    await this.formatPaperBack.click();
 }
 
 async selectMassMarket() {
    await this.formatMassMarket.waitForDisplayed();
    await this.formatMassMarket.click();
 }
 async selectAudioCd() {
    await this.formatAudioCd.waitForDisplayed();
    await this.formatAudioCd.click();
 }
 async Checkout() {
    await this.checkOutBtn.waitForDisplayed()
    await this.checkoutBtn.click();
 }
    }


export default new BookDetails(); 
