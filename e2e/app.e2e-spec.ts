import { CarWebsitePage } from './app.po';

describe('car-website App', function() {
  let page: CarWebsitePage;

  beforeEach(() => {
    page = new CarWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
