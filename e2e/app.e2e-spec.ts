import { MtgLeaguePage } from './app.po';

describe('mtg-league App', () => {
  let page: MtgLeaguePage;

  beforeEach(() => {
    page = new MtgLeaguePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
