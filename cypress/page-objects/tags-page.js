export class TagsPage{
    navigate(url) {
        cy.visit(url);
    }
  
    waitTime(delay, version , scenario, test, id){
        cy.wait(delay);
        var fileName = test+"_"+id;
        cy.screenshot(`./${version}/${scenario}/${test}/${fileName}`);
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
        cy.get(search).contains(text).click({force: true})
    }

    deleteTag(){
        cy.get(".gh-btn.gh-btn-red.gh-btn-icon.ember-view").first().click({ force: true })
    };

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

    checkTextContent(classSelector, expectedText){
        cy.get(classSelector).should('have.text', expectedText);
    }


}