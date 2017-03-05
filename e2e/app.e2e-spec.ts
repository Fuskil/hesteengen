import { HesteengenPage } from './app.po';

describe('hesteengen App', function() {
  let page: HesteengenPage;

  beforeEach(() => {
    page = new HesteengenPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
