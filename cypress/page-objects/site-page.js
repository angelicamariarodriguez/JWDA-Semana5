export class SitePage{

    irAConfiguracionGeneral(){
        cy.get('a.ember-view').contains('General').click()
    }
}