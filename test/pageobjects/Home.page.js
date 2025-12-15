import { browser } from '@wdio/globals';

export default class HomePage {
    async HomePage() {
        return browser.url('https://www.thriftbooks.com');
    }
}
