import { browser } from '@wdio/globals';

module.exports = {
    open (path) {
        return browser.url(`https://www.thriftbooks.com`)
    }
}

export default new Page(); 