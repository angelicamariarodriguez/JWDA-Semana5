const url = Cypress.config('baseUrl') || "http://localhost:2368/ghost/#/signin"
const delay = Cypress.env('delay') || 100

export class LoginPage {


    navigate(){
        cy.visit(url)
        cy.wait(delay);
    }

    enterUser(user){
        cy.get('input[name="identification"]').type(user)
    }

    enterPassword(password){
        cy.get('input[name="password"]').type(password)
    }

    clickOnSignIn(){
        cy.get('button.login.gh-btn.gh-btn-blue.gh-btn-block.gh-btn-icon.ember-view').click()
    }

    verificarLogin(){
        cy.get('div.gh-nav-menu-icon').should('be.visible')
    }
}