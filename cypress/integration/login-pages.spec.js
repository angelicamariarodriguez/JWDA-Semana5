import {LoginPages} from "../page-objects/login-pages";
const url = Cypress.config('baseUrl') || "http://localhost:2368/"
const delay = Cypress.env('delay') || 300
const faker = require('faker');

describe('Login Pages', () => {

  const loginPages = new LoginPages();
  
  beforeEach(() => {
      loginPages.navigate(url+'ghost/#/signin');
      loginPages.waitTime(delay);
  })

  it('Login with incorrect user and password    ', () => {
      loginPages.fillOutInput(faker.internet.email(), '[id^=ember8]');
      loginPages.fillOutInput(faker.random.alphaNumeric(), '[id^=ember10]');
      loginPages.CLickItem('[id^=ember12]', 0);
      managePages.searchTheTextExists('body', 'No pages match the current filter');
      login.searchTheTextExists('body','Access denied.');
      loginPages.waitTime(delay);
  })

  
})
