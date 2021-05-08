export class TagsPage{
    navigate(url) {
        cy.visit(url);
    }
  
    waitTime(delay){
        cy.wait(delay);
    }

    addText(search, text){
        const item = cy.get(search).first()
        item.type(text, {force: true})
    }

    editText(search, newText, index){
        cy.get(search).then($field => {
            var title = $field.get(index);
            if(!Cypress.dom.isHidden(title)) {
                cy.wrap(title).clear({force:true});
                cy.wrap(title).type(newText, {force:true});	
             } 
        })
    }

    clickButton(search, index, flag ){
        cy.get(search).then($button => {
            const buttonLink = $button.get(index);
            if(!Cypress.dom.isHidden(buttonLink)) {
              cy.wrap(buttonLink).click({force: flag});
           } 
        });
    }

    searchByContains(search, text){
        cy.get(search).contains(text).click()
    }

    saveChanges(){
        cy.get('.gh-canvas-title').contains("Tags").click();
        //cy.get('.koenig-editor__editor').click(); 
    }

    goToTagPage(){
        cy.contains('Tags').click({force:true});
    }

    goToContent(text){
        cy.get('a.ember-view').contains(text).click()
    }


}
/*

    addName(tagname){
        const item = cy.get("name").first()
        item.type(text, {force: true});
       
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

            cy.get('[class^=gh-btn]').then($button => {
                var expand = $button.get(0);
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

    returnToViewSite(){
        cy.contains('View site').click()
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

        cy.get('input').then($field => {
            var title = $field.get(0);
            if(!Cypress.dom.isHidden(title)) {
                cy.wrap(title).clear({force:true});
                cy.wrap(title).type(newMetaTitle, {force:true});	
             } 
        })

    }

    verifyMetaTitle(newMetaTitle){
        cy.get('input').then($field => {
            var title = $field.get(0);
            if(!Cypress.dom.isHidden(title)) {
                cy.wrap(title).should('have.value', newMetaTitle)	
             } 
        })

    }

    makePrivate(){
        cy.get('.switch').click({force:true})
    }

    verifyPrivate(){
 
        cy.contains('A private RSS feed is available at')
    }

    makeNoPrivate(){
        cy.get('.switch').click({force:true})
    }

    verifyNotPrivate(){
 
        cy.contains('Enable protection with simple shared password. All search engine optimization and social features will be disabled.')
    } 
    */
