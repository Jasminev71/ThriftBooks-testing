import { $ } from '@wdio/globals';
import Page from './page.js';

class BookDetails extends Page {
    get formatHardcover() { return $("//button[contains(@class,'WorkSelector-button')][.//div[normalize-space()='Hardcover']]") }
    get formatPaperBack() { return $("//button[contains(@class,'WorkSelector-button')][.//div[normalize-space()='Paperback']]")}
    get formatMassMarket() { return $("//button[contains(@class,'WorkSelector-button')][.//div[normalize-space()='Mass Market Paperback']]") }
    get formatDigital() { return $("//button[contains(@class,'WorkSelector-button')][.//div[normalize-space()='Digital']]")}
   




   async open() {
      return super.open('/w/oathbringer_brandon-sanderson/13873541/item/#edition=13683159&idiq=24662077');
   }

 async defaultHardcover() {
    await this.formatHardcover.waitForDisplayed();
    await this.displayHardCover.waitForDisplayed()
 }

 async selectHardcover() {
    await this.formatHardcover.waitForClickable();
    await this.formatHardcover.click();
 }
 async selectPaperback() {
    await this.formatPaperBack.waitForClickable();
    await this.formatPaperBack.click();
   
 }
 
 async selectMassMarket() {
    await this.formatMassMarket.waitForClickable();
    await this.formatMassMarket.click();
 }
 async selectDigital() {
    await this.formatDigital.waitForClickable();
    await this.formatDigital.click();
 }
 async Checkout() {
    await this.checkOutBtn.waitForDisplayed()
    await this.checkoutBtn.click();
 }
    }


export default new BookDetails(); 
