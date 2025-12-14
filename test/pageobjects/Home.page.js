import { browser } from '@wdio/globals';

export default class HomePage {
    async open() {
        return browser.url('https://www.thriftbooks.com');
    }
}
