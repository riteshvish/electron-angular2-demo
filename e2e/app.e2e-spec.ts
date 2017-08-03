import { ElectronAngular2DemoPage } from './app.po';

describe('electron-angular2-demo App', () => {
  let page: ElectronAngular2DemoPage;

  beforeEach(() => {
    page = new ElectronAngular2DemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
