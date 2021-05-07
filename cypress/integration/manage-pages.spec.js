import {ManagePages} from "../page-objects/manage-pages";
const url = Cypress.config('baseUrl') || "http://localhost:2368/"
const delay = Cypress.env('delay') || 300
const user_login = Cypress.env('user_login') || "prueba@gmail.com"
const user_password = Cypress.env('user_password') || "123456789*"

describe('Manage pages', () => {

  const managePages = new ManagePages();
  
  beforeEach(() => {
      managePages.navigate(url+'ghost/#/signin');
      managePages.waitTime(delay);
  })

  it('Should filter the pages with the next items: published pages  ', () => {
      managePages.fillOutInput(user_login, '[id^=ember8]');
      managePages.fillOutInput(user_password, '[id^=ember10]');
      managePages.CLickItem('[id^=ember12]', 0, true);
      managePages.waitTime(delay);
      managePages.CLickItem('[id^=ember30]', 0, true);
      managePages.CLickItem('[id^=ember72]', 0, true);
      managePages.waitTime(delay);
      managePages.CLickItem('[id^=ember72]', 0, false);
      managePages.navigate('ghost/#/pages?type=scheduled');
      managePages.waitTime(delay);
      managePages.searchTheTextExists('body', 'No pages match the current filter');
  })

    it('Should filter the pages with the next items: published pages and author  ', () => {
        managePages.fillOutInput(user_login, '[id^=ember8]');
        managePages.fillOutInput(user_password, '[id^=ember10]');
        managePages.CLickItem('[id^=ember12]', 0, true);
        managePages.waitTime(delay);
        managePages.CLickItem('[id^=ember30]', 0, true);
        managePages.CLickItem('[id^=ember72]', 0, true);
        managePages.waitTime(delay);
        managePages.CLickItem('[id^=ember72]', 0, false);
        managePages.navigate('ghost/#/pages?author=ghost&type=published');
        managePages.waitTime(delay);
        managePages.searchTheTextExists('body', 'No pages match the current filter');
    })

    it('Should filter the pages with the next items: published pages, author  and tag ', () => {
        managePages.fillOutInput(user_login, '[id^=ember8]');
        managePages.fillOutInput(user_password, '[id^=ember10]');
        managePages.CLickItem('[id^=ember12]', 0, true);
        managePages.waitTime(delay);
        managePages.CLickItem('[id^=ember30]', 0, true);
        managePages.CLickItem('[id^=ember72]', 0, true);
        managePages.waitTime(delay);
        managePages.CLickItem('[id^=ember72]', 0, false);
        managePages.navigate('ghost/#/pages?author=ghost&tag=getting-started&type=published');
        managePages.waitTime(delay);
        managePages.searchTheTextExists('body', 'No pages match the current filter');
    })

    it('Should filter the pages with the next items: published pages,  author, tag and Oldest  ', () => {
        managePages.fillOutInput(user_login, '[id^=ember8]');
        managePages.fillOutInput(user_password, '[id^=ember10]');
        managePages.CLickItem('[id^=ember12]', 0, true);
        managePages.waitTime(delay);
        managePages.CLickItem('[id^=ember30]', 0, true);
        managePages.CLickItem('[id^=ember72]', 0, true);
        managePages.waitTime(delay);
        managePages.CLickItem('[id^=ember72]', 0, false);
        managePages.navigate('ghost/#/pages?author=ghost&order=published_at asc&tag=getting-started&type=scheduled');
        managePages.waitTime(delay);
        managePages.searchTheTextExists('body', 'No pages match the current filter');
    })
  
})
