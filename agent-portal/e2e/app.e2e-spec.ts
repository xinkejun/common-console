import { AgentPortalPage } from './app.po';

describe('agent-portal App', () => {
  let page: AgentPortalPage;

  beforeEach(() => {
    page = new AgentPortalPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
