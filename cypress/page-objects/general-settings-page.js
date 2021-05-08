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

    clickOnExpanForMetaSettings(){

        cy.xpath('(//button[@class="gh-btn"])[6]').click({force:true})


       
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

    selectTimeZone(){
        cy.get('select').select('Pacific/Honolulu',{ force: true }) 
    }

    verifyTimeZoneSelected(){
        cy.get('select').should('have.value','Pacific/Honolulu')
    }

    editMetaTitle(newMetaTitle){

        cy.xpath('(//input[@class="ember-text-field gh-input ember-view"])').clear({force:true})
        cy.xpath('(//input[@class="ember-text-field gh-input ember-view"])').type(newMetaTitle,{force:true})

    }

    
    editMetaDescription(newMetaDescription){

        cy.xpath('//textarea[@class="ember-text-area gh-input ember-view"]').clear({force:true})
        cy.xpath('//textarea[@class="ember-text-area gh-input ember-view"]').type(newMetaDescription,{force:true})

    }

    verifyMetaTitle(newMetaTitle){
        cy.xpath('(//input[@class="ember-text-field gh-input ember-view"])').should('have.value', newMetaTitle)

    }


    changePrivacy(){

        cy.xpath('(//label[@class="switch"])').click({force:true})
    }


}