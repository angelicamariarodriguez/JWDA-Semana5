import {ManagePages} from "../page-objects/manage-pages";
import {Constant_PAGES} from "../page-objects/constant-page";
const url = Constant_PAGES.BASE_URL
const delay = Constant_PAGES.DELAY
const user = Constant_PAGES.USER
const password = Constant_PAGES.PASSWORD

describe('Manage pages', () => {

  const managePages = new ManagePages();
  
  beforeEach(() => {
      managePages.navigate(url + 'ghost/#/signin' );
      managePages.waitTime(delay);
  })

  it('Should filter the pages with the next items: published pages  ', () => {
      managePages.fillOutInput(user, '[id^=ember8]');
      managePages.fillOutInput(password, '[id^=ember10]');
      managePages.CLickItem('[id^=ember12]', 0, true);
      managePages.waitTime(delay);
      managePages.CLickItem('[id^=ember30]', 0, true);
      managePages.searchByContains('body', 'Pages');
      managePages.waitTime(delay);
      managePages.searchByContains('body', 'All pages');
      managePages.navigate('ghost/#/pages?type=concept');
      managePages.waitTime(delay);
      managePages.searchTheTextExists('body', 'No pages match the current filter');
  })

    it('Should filter the pages with the next items: published pages and author  ', () => {
        managePages.fillOutInput(user, '[id^=ember8]');
        managePages.fillOutInput(password, '[id^=ember10]');
        managePages.CLickItem('[id^=ember12]', 0, true);
        managePages.waitTime(delay);
        managePages.CLickItem('[id^=ember30]', 0, true);
        managePages.searchByContains('body', 'Pages');
        managePages.waitTime(delay);
        managePages.searchByContains('body', 'All authors');
        managePages.navigate('ghost/#/pages?author=ghost&type=concept');
        managePages.waitTime(delay);
        managePages.searchTheTextExists('body', 'No pages match the current filter');
    })

    it('Should filter the pages with the next items: published pages, author  and tag ', () => {
        managePages.fillOutInput(user, '[id^=ember8]');
        managePages.fillOutInput(password, '[id^=ember10]');
        managePages.CLickItem('[id^=ember12]', 0, true);
        managePages.waitTime(delay);
        managePages.CLickItem('[id^=ember30]', 0, true);
        managePages.searchByContains('body', 'Pages');
        managePages.waitTime(delay);
        managePages.searchByContains('body', 'All tags');
        managePages.navigate('ghost/#/pages?author=ghost&tag=getting-started&type=concept');
        managePages.waitTime(delay);
        managePages.searchTheTextExists('body', 'No pages match the current filter');
    })

    it('Should filter the pages with the next items: published pages,  author, tag and Oldest  ', () => {
        managePages.fillOutInput(user, '[id^=ember8]');
        managePages.fillOutInput(password, '[id^=ember10]');
        managePages.CLickItem('[id^=ember12]', 0, true);
        managePages.waitTime(delay);
        managePages.CLickItem('[id^=ember30]', 0, true);
        managePages.searchByContains('body', 'Pages');
        managePages.waitTime(delay);
        managePages.searchByContains('body', 'All tags');
        managePages.navigate('ghost/#/pages?author=ghost&order=published_at asc&tag=getting-started&type=concept');
        managePages.waitTime(delay);
        managePages.searchTheTextExists('body', 'No pages match the current filter');
    })
  
})
