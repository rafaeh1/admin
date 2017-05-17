import { HappyGuestWebAdminPage } from './app.po';

describe('happy-guest-web-admin App', () => {
  let page: HappyGuestWebAdminPage;

  beforeEach(() => {
    page = new HappyGuestWebAdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
