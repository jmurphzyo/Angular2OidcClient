import { Angular2OidcClientPage } from './app.po';

describe('angular2-oidc-client App', function() {
  let page: Angular2OidcClientPage;

  beforeEach(() => {
    page = new Angular2OidcClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
