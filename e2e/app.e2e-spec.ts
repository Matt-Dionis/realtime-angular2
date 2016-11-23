import { TestExpressPage } from './app.po';

describe('test-express App', function() {
  let page: TestExpressPage;

  beforeEach(() => {
    page = new TestExpressPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
