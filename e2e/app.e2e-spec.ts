import { GametwoPage } from './app.po';

describe('gametwo App', () => {
  let page: GametwoPage;

  beforeEach(() => {
    page = new GametwoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
