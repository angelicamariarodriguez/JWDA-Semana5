/// <reference types="cypress"/>

const url = Cypress.config('baseUrl') || "http://localhost:2368/ghost/#/signin"
const delay = Cypress.env('delay') || 100
const faker = require('faker');
const config = require('../../posts-config.json')
let loginURL = config.loginURL;
let userInputID = config.values.userInputID;
let passwordInputID = config.values.passwordInputID;
let loginButtonID =  config.values.loginButtonID;
let userNameLogin = config .values.userName;
let passwordLogin = config.values.password; 

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

describe('Post E2E', () => {
    beforeEach(() => {
      cy.visit(url)
      cy.wait(delay);
    })
  
    it('Ingresar con credenciales validos y crear un post con titulo usando boton "new post" y estado scheduled', () => {
        fillOutInput(userNameLogin, `[id^=${userInputID}]`);
        fillOutInput(passwordLogin, `[id^=${passwordInputID}]`);
        clickButton(`[id^=${loginButtonID}]`, 0);
        cy.get('.gh-user-email').should('have.text', userNameLogin);
        cy.wait(delay);

        clickButton(`[id^=ember28]`, 0);
        cy.get('.gh-canvas-title').should('have.text', 'Posts');
        cy.wait(delay);

        clickButton(`.gh-btn-green`, 0);
        cy.get('.gh-editor-header',{timeout:5000}).contains('New');
        cy.wait(delay);

        let postTitle = faker.lorem.sentence();

        cy.get('.gh-editor-title',{timeout:5000}).type(postTitle);
        cy.get('.gh-editor-header',{timeout:5000}).contains("Posts");
        cy.get('.koenig-editor__editor',{timeout:5000}).click();
        cy.go('back');
        cy.contains(postTitle).click({force:true});
        cy.get('.gh-publishmenu',{timeout:5000}).click();
        cy.get('.gh-publishmenu-radio-label',{timeout:5000}).click({multiple:true});
                                    
        cy.get('.gh-publishmenu-button',{timeout:5000}).click();
        cy.wait(delay);

        cy.go('back');
        cy.get('.gh-canvas-title',{timeout:5000}).should('have.text', 'Posts');
        cy.wait(delay);

        //cy.contains("View site").click({force:true});

        //cy.get('.gh-contentfilter-type',{timeout:5000}).click();
        //cy.get('ul li[data-option-index="2"]',{timeout:5000}).click();
           
        cy.get('ol h3:first').should('have.text', `\n        ${postTitle}\n    `);
  


    });

  });