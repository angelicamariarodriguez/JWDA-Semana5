import {ManagePages} from "../page-objects/manage-pages";
const url = Cypress.config('baseUrl') || "http://localhost:2368/"
const delay = Cypress.env('delay') || 300
const faker = require('faker');

describe('Login Pages', () => {

  const managePages = new ManagePages();
  
  beforeEach(() => {
      managePages.navigate(url+'ghost/#/signin');
      managePages.waitTime(delay);
  })

  it('Login with incorrect user and password    ', () => {
      managePages.fillOutInput(faker.internet.email(), '[id^=ember8]');
      managePages.fillOutInput(faker.random.alphaNumeric(), '[id^=ember10]');
      managePages.CLickItem('[id^=ember12]', 0);
      cy.contains('Access denied.');
      cy.wait(delay);
  })

  
})
