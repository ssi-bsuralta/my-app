import { AppPage } from './app.po';

describe('my-app App', () => {
    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
    });

    it('should display welcome message', () => {
        page.navigateTo();
        expect(page.getFormInput().count()).toBe(2);
    });
});
