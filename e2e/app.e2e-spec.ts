import { DomiciliosPage } from './app.po';

describe('domicilios App', function() {
  let page: DomiciliosPage;

  beforeEach(() => {
    page = new DomiciliosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
