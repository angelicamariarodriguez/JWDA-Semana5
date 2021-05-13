import {LoginPages} from "../page-objects/login-pages";
import {Constant_PAGES} from "../page-objects/constant-page";
const url = Constant_PAGES.BASE_URL
const delay = Constant_PAGES.DELAY
const user = Constant_PAGES.USER
const password = Constant_PAGES.PASSWORD
const faker = require('faker');
const scenario = "login";
const version= "3.3.0";
let test="";
let id = 0;

describe('Login Pages', () => {

  const loginPages = new LoginPages();
  
  beforeEach(() => {
      loginPages.navigate(url + 'ghost/#/signin');
      
  })

  it('Login with incorrect user and password    ', () => {
    test = 'login_with_incorrect_user_and_password';
    id=0;

    loginPages.waitTime(delay, version, scenario, test, id);
    id++;
      loginPages.fillOutInput(faker.internet.email(), '[id^=ember8]');
      loginPages.waitTime(delay, version, scenario, test, id);
    id++;
      loginPages.fillOutInput(faker.random.alphaNumeric(), '[id^=ember10]');
      loginPages.waitTime(delay, version, scenario, test, id);
    id++;
      loginPages.CLickItem('[id^=ember12]', 0);
      loginPages.waitTime(delay, version, scenario, test, id);
      id++;
      loginPages.searchTheTextExists('body','Access denied.');
      loginPages.waitTime(delay, version, scenario, test, id);
    id++;
  })
  it('Login with valid user and password    ', () => {
    test = 'login_with_valid_user_and_password';
    id=0;

    loginPages.waitTime(delay, version, scenario, test, id);
    id++;
    loginPages.fillOutInput(user, '[id^=ember8]');
    loginPages.waitTime(delay, version, scenario, test, id);
    id++;
    loginPages.fillOutInput(password, '[id^=ember10]');
    loginPages.waitTime(delay, version, scenario, test, id);
    id++;
    loginPages.CLickItem('[id^=ember12]', 0); 
    loginPages.waitTime(delay, version, scenario, test, id);
    id++;
    loginPages.searchTheTextExists('body','View site');
    loginPages.waitTime(delay, version, scenario, test, id);
    id++;
})

it('Login with valid user and invalid password    ', () => {
  test = 'login_with_valid_user_and_invalid_password';
  id=0;

  loginPages.waitTime(delay, version, scenario, test, id);
  id++;
  loginPages.fillOutInput(user, '[id^=ember8]');
  loginPages.waitTime(delay, version, scenario, test, id);
  id++;
  loginPages.fillOutInput(faker.random.alphaNumeric(), '[id^=ember10]');
  loginPages.waitTime(delay, version, scenario, test, id);
  id++;
  loginPages.CLickItem('[id^=ember12]', 0);
  loginPages.waitTime(delay, version, scenario, test, id);
  id++;
  loginPages.searchTheTextExists('body','Your password is incorrect.');
  loginPages.waitTime(delay, version, scenario, test, id);
  id++;
})

it('Login with invalid user and valid password    ', () => {
  test = 'login_with_inalid_user_and_valid_password';
  id=0;

  loginPages.waitTime(delay, version, scenario, test, id);
  id++;
  
  loginPages.fillOutInput(faker.internet.email(), '[id^=ember8]');
  loginPages.waitTime(delay, version, scenario, test, id);
  id++;
  loginPages.fillOutInput(password, '[id^=ember10]');
  loginPages.waitTime(delay, version, scenario, test, id);
  id++;
  loginPages.CLickItem('[id^=ember12]', 0);
  loginPages.waitTime(delay, version, scenario, test, id);
  id++;
  loginPages.searchTheTextExists('body','Access denied.');
  loginPages.waitTime(delay, version, scenario, test, id);
  id++;
})

  
})
