import {LoginPages} from "../page-objects/login-pages";
import {Constant_PAGES} from "../page-objects/constant-page";
const url = Constant_PAGES.BASE_URL
const delay = Constant_PAGES.DELAY
const user = Constant_PAGES.USER
const password = Constant_PAGES.PASSWORD
const faker = require('faker');

describe('Login Pages', () => {

  const loginPages = new LoginPages();
  
  beforeEach(() => {
      loginPages.navigate(url + 'ghost/#/signin');
      loginPages.waitTime(delay);
  })

  it('Login with incorrect user and password    ', () => {
      loginPages.fillOutInput(faker.internet.email(), '[id^=ember8]');
      loginPages.fillOutInput(faker.random.alphaNumeric(), '[id^=ember10]');
      loginPages.CLickItem('[id^=ember12]', 0);
      loginPages.searchTheTextExists('body','Access denied.');
      loginPages.waitTime(delay);
  })
  it('Login with valid user and password    ', () => {
    loginPages.fillOutInput(user, '[id^=ember8]');
    loginPages.fillOutInput(password, '[id^=ember10]');
    loginPages.CLickItem('[id^=ember12]', 0);
    loginPages.searchTheTextExists('body','View site');
    loginPages.waitTime(delay);
})

  
})
