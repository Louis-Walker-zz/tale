import { TalePage } from './app.po';

describe('tale App', function() {
  let page: TalePage;

  beforeEach(() => {
    page = new TalePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
