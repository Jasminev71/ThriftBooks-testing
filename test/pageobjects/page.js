import { browser } from '@wdio/globals';

export default class Page {
    async open(path = '/') {
        return browser.url(`https://www.thriftbooks.com${path}`);
    }
}
