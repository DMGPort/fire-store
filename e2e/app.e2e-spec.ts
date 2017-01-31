import { FireStorePage } from './app.po';

describe('fire-store App', function() {
  let page: FireStorePage;

  beforeEach(() => {
    page = new FireStorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
