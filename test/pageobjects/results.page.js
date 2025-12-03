import { $, $$, expect } from '@wdio/globals';



class ResultsPage  {
    get selectedDisplay() { return $('//div[.//h3[normalize-space()="Selected"]]')}
    get clearbtn() { return this.selectedDisplay.$('//a[contains(.,"Clear")]'); }
    get resultHeader() {return $('//*[contains(text(),"results for")]')}
    get booksTag() {return $()}
    get formatTag() {return $()}
    get conditionTag() {return $()}

 async filterTagsVisible() {
    //this will ensure that the selcted tags are visable
 }
 async addFilterTags () {
//this will add filter tags and be visabele from slected section
 }

 async clearAll() {
    
  await this.clearBtn.waitForClickable();
  await this.clearBtn.click();
  await expect(this.tag("Show Out Of Stock Items")).not.toBeDisplayed()
 }
 async clearOneFilter() {
//this will clear only one filter tag using the "x" icon from corner of the filter tag
 }



    }


export default new ResultsPage(); 