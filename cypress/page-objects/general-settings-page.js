/// <reference types="cypress-xpath" />
export class GeneralSettingsPage{


    waitTime(delay, version , scenario, test, id){
        cy.wait(delay);
        var fileName = test+"_"+id;
        cy.screenshot(`./${version}/${scenario}/${test}/${fileName}`);
    }
    
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
        if(newTitle==null){
            newTitle=" "
        }
        cy.get('input').then($field => {
            var title = $field.get(0);
            if(!Cypress.dom.isHidden(title)) {
                cy.wrap(title).clear({force:true});
                cy.wrap(title).type(newTitle, {force:true});	
             } 
        })
    }

    editDescription(newDescription){
        if(newDescription==null){
            newDescription=" "
        }
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
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })
    }


    verifyTitle(newTitle){             

        if(newTitle == null){
            cy.xpath('(//p[@class="response"])[1]').should('have.text', "\n    Title can not be empty\n")
        }else{
        if(newTitle.length < 3){
            cy.xpath('(//p[@class="response"])[1]').should('have.text', "\n    Title is too short\n")
        }
        if(newTitle.length > 150){
            cy.xpath('(//p[@class="response"])[1]').should('have.text', "\n    Title is too long\n")
        }else{
            cy.get('input').then($field => {
                var title = $field.get(0);
                if(!Cypress.dom.isHidden(title)) {
                    cy.wrap(title).should('have.value', newTitle)	
                 } 
            })
        }
    }


    }

    verifyDescription(newDescription){
        if(newDescription == null){
            cy.xpath('(//p[@class="response"])[2]').should('have.text', "\n    Description can not be empty\n")
        }else{
        if(newDescription.length < 5){
            cy.xpath('(//p[@class="response"])[2]').should('have.text', "\n    Description is too short\n")
        }
        if(newDescription.length > 200){
            cy.xpath('(//p[@class="response"])[2]').should('have.text', "\n    Description is too long\n")
        }else{
            cy.get('input').then($field => {
                var description = $field.get(1);
                if(!Cypress.dom.isHidden(description)) {
                    cy.wrap(description).should('have.value', newDescription)	
                 } 
            })
        }
    }

    }


    verifyLanguage(newLanguage){

        if(newLanguage == null){
            cy.xpath('(//aside[@class="gh-alerts ember-view"])').should('be.visible')
        }else{
            
            var numeros="0123456789";
            let num=0;
            let alp=0;
            for(let j=0; j<newLanguage.length; j++){
                for(let i=0; i<numeros.length; i++){
                    if (numeros.charAt(i)== newLanguage.charAt(j)){
                        num = num+1;
                        break
                    }else{
                         alp =alp+1;
                    }
                }
            }
                  
            if(num > 0){
                cy.xpath('(//div[@class="gh-setting-last"])').should('have.value',"Language must contain only alpahabetic characters")
            }else if(num == 0){
                cy.xpath('(//input[@class="ember-text-field gh-input ember-view"])[1]').should('have.value', newLanguage)
            }
            
        }

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

        if(newLanguage==null){
            cy.xpath('(//input[@class="ember-text-field gh-input ember-view"])[1]').clear({force:true})
        }else{
        cy.xpath('(//input[@class="ember-text-field gh-input ember-view"])[1]').clear({force:true})
        cy.xpath('(//input[@class="ember-text-field gh-input ember-view"])[1]').type(newLanguage, {force:true});
        }	
    }

    verifyPrivate(){
 
        cy.contains('A private RSS feed is available at')
    }

}