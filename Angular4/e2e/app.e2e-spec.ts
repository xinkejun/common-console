import { CommonConsolePage } from './app.po';

describe('common-console App', () => {
  let page: CommonConsolePage;

  beforeEach(() => {
    page = new CommonConsolePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
