

export class LoginPage {


    navigate(url){
        cy.visit(url)
    }

    waitTime(delay){
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
