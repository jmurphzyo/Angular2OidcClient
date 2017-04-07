import { AngularCliProjectPage } from './app.po';

describe('angular-cli-project App', () => {
  let page: AngularCliProjectPage;

  beforeEach(() => {
    page = new AngularCliProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
