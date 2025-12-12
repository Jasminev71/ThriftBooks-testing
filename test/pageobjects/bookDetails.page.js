
import HomePage from './Home.page.js';

class BookDetails extends HomePage {
 
format(format) { return $(`//button[contains(@class,'WorkSelector-button')][.//div[normalize-space()='${format}']]`) }

 async defaultHardcover() {
    await this.format('Hardcover').waitForDisplayed()
 }

async formatSelection()  {
    const format = ['Hardcover', 'Paperback', 'Mass Market Paperback','Audio CD']
     for (const formatTag of format) {
      const formatButton = this.format(formatTag);
      await formatButton.waitForClickable();
      await formatButton.click();
      await expect(formatButton).toBeDisplayed();
        }
    }
}
export default new BookDetails(); 
