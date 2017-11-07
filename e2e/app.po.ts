import { browser, by, element } from 'protractor';

export class AppPage {
    navigateTo() {
        return browser.get('/');
    }

    getFormInput() {
        return element.all(by.css('app-root form input'));
    }
}
