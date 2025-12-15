import { $, expect } from '@wdio/globals';
import HomePage from './Home.page';

class ResultsPage extends HomePage {
    get selectedDisplay() {
        return $('//div[.//h3[normalize-space()="Selected"]]');
    }

    get resultHeader() {
        return $('.Search-sortBar-results');
    }

    get selectedDisplay() {
  return $('p.Search-filterGroup-title.Search-filter-header-text');
  }
   
    get acceptBtn() { $('//button[normalize-space()="Accept"]');}

    tagTitle(tag) {
  return $(`//label[.//div[contains(@class,'Checkbox-label') and contains(normalize-space(), '${tag}')]]`);
}

async acceptCookies() {
  const acceptBtn = $('//button[normalize-space()="Accept"]');

  if (await acceptBtn.isDisplayed()) {
    await acceptBtn.click();
  }
}
async selectionTags() {
  
  await this.selectedDisplay.waitForDisplayed();

  const tags = ['Books', 'Fiction', 'Hardcover', 'New'];

  for (const tag of tags) {
    const checkbox = this.tagTitle(tag);
    await checkbox.scrollIntoView();
    await checkbox.waitForDisplayed();
    await checkbox.click();
    //click again to remove tag
    await checkbox.click();


   }
  }

}

export default new ResultsPage(); 