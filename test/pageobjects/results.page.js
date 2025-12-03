import { $, $$, expect } from '@wdio/globals';
import Page from './page'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class resultsPage  {
    /**
     * define selectors using getter methods
     */
    get flashAlert () {
        return $('#flash');
    }
}

export default new ResultsPage(); 