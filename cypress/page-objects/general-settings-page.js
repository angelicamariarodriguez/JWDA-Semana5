/// <reference types="cypress-xpath" />
export class GeneralSettingsPage{

    clickOnExpanForTitleAndDescription(){

        cy.get('[class^=gh-btn]').then($button => {
            var expand = $button.get(1);
            if(!Cypress.dom.isHidden(expand)) {
               cy.wrap(expand).click({force: true});	
            } 
        });
       
    }

    
    clickOnExpanForTimeZone(){

        cy.get('[class^=gh-btn]').then($button => {
            var expand = $button.get(2);
            if(!Cypress.dom.isHidden(expand)) {
               cy.wrap(expand).click({force: true});	
            } 
        });
       
    }

    clickOnExpanForLanguage(){

        cy.get('[class^=gh-btn]').then($button => {
            var expand = $button.get(3);
            if(!Cypress.dom.isHidden(expand)) {
               cy.wrap(expand).click({force: true});	
            } 
        });
       
    }

    editTitle(newTitle){
        cy.get('input').then($field => {
            var title = $field.get(0);
            if(!Cypress.dom.isHidden(title)) {
                cy.wrap(title).clear({force:true});
                cy.wrap(title).type(newTitle, {force:true});	
             } 
        })
    }

    editDescription(newDescription){
        cy.get('input').then($field => {
            var title = $field.get(1);
            if(!Cypress.dom.isHidden(title)) {
                cy.wrap(title).clear({force:true});
                cy.wrap(title).type(newDescription, {force:true});	
             } 
        })
    }

    saveChanges(){
        cy.get('[class^=gh-btn]').then($button => {
            var expand = $button.get(0);
            if(!Cypress.dom.isHidden(expand)) {
               cy.wrap(expand).click({force: true});	
            } 
        });
    }


    verifyTitle(newTitle){
        cy.get('input').then($field => {
            var title = $field.get(0);
            if(!Cypress.dom.isHidden(title)) {
                cy.wrap(title).should('have.value', newTitle)	
             } 
        })

    }

    verifyDescription(newDescription){
        cy.get('input').then($field => {
            var description = $field.get(1);
            if(!Cypress.dom.isHidden(description)) {
                cy.wrap(description).should('have.value', newDescription)	
             } 
        })

    }

    verifyLanguage(newLanguage){

        cy.xpath('(//input[@class="ember-text-field gh-input ember-view"])[1]').should('have.value', newLanguage)	

    }

    selectTimeZone(timeZone){
        cy.get('select').select(timeZone,{ force: true }) 
    }

    verifyTimeZoneSelected(timeZone){
        cy.get('select').should('have.value',timeZone)
    }

    

    changePrivacy(){

        cy.xpath('(//label[@class="switch"])').click({force:true})
    }
    
    editLanguage(newLanguage){

        cy.xpath('(//input[@class="ember-text-field gh-input ember-view"])[1]').clear({force:true})
        cy.xpath('(//input[@class="ember-text-field gh-input ember-view"])[1]').type(newLanguage, {force:true});	
    }

    verifyPrivate(){
 
        cy.contains('A private RSS feed is available at')
    }

}