import { NgReleasePage } from './app.po';

describe('ng-release App', function() {
  let page: NgReleasePage;

  beforeEach(() => {
    page = new NgReleasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
