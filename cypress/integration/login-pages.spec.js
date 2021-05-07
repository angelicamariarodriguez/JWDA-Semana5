import {LoginPages} from "../page-objects/login-pages";
const url = Cypress.config('baseUrl') 
const delay = Cypress.env('delay') 
const faker = require('faker');

describe('Login Pages', () => {

  const loginPages = new LoginPages();
  
  beforeEach(() => {
      loginPages.navigate(url);
      loginPages.waitTime(delay);
  })

  it('Login with incorrect user and password    ', () => {
      loginPages.fillOutInput(faker.internet.email(), '[id^=ember8]');
      loginPages.fillOutInput(faker.random.alphaNumeric(), '[id^=ember10]');
      loginPages.CLickItem('[id^=ember12]', 0);
      loginPages.searchTheTextExists('body','Access denied.');
      loginPages.waitTime(delay);
  })

  
})
