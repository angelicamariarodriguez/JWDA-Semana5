const url = Cypress.config('baseUrl') || "http://localhost:2368/ghost/#/signin"
const delay = Cypress.env('delay') || 100
var faker = require('faker');



function fillOutInput(text, idSearch){
	const item = cy.get(idSearch).first()
    item.type(text, {force: true});  
}

function clickButton(search, index ){
	 cy.get(search).then($button => {
        var buttonLink = $button.get(index);
        if(!Cypress.dom.isHidden(buttonLink)) {
           cy.wrap(buttonLink).click({force: true});	
        } 
    });
}


describe('Login', () => {
  beforeEach(() => {
    cy.visit(url)
	cy.wait(delay);
  })

  it('Igresar con un usuario y clave invalido', () => {
      fillOutInput(faker.internet.email(), '[id^=ember8]');
	  fillOutInput(faker.random.alphaNumeric(), '[id^=ember10]');
	  clickButton('[id^=ember12]', 0);
	  cy.contains('Access denied.')
	  cy.wait(delay);
  })

  
})