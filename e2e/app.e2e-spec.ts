import { SharedServicesPage } from './app.po';

describe('shared-services App', function() {
  let page: SharedServicesPage;

  beforeEach(() => {
    page = new SharedServicesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
