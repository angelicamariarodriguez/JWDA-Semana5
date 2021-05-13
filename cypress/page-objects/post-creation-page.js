export class PostCreationPage{


    fillOutInput(text, idSearch){
        const item = cy.get(idSearch).first()
        item.type(text, {force: true});  
    }   
    clickButton(search, index ){
         cy.get(search).then($button => {
            var buttonLink = $button.get(index);
            if(!Cypress.dom.isHidden(buttonLink)) {
               cy.wrap(buttonLink).click({force: true});	
            } 
        });
    }  
    navigate(url){
        cy.visit(url);
    }
    waitTime(delay, version , scenario, test, id){
        cy.wait(delay);
        var fileName = test+"_"+id;
        cy.screenshot(`./${version}/${scenario}/${test}/${fileName}`);
    }
    checkElementToHaveTextContent(classSelector, expectedText){
        cy.get(classSelector).should('have.text', expectedText);
    }
    clickOnNewPostButton(classSelector){
        cy.get(classSelector).click();
    }
    checkElementContent(classSelector, expectedContent){
        cy.get(classSelector).contains(expectedContent);
    }
    typeTextPostTitle(classSelector, textToType){
        cy.get(classSelector).type(textToType);
    }
    savePostChanges(){
        cy.get('.gh-editor-header').contains("Posts");
        cy.get('.koenig-editor__editor').click(); 
    }
    goToPostList(){
        cy.contains('Posts').click({force:true});
    }
    goToPostByTitle(postTitle){
        cy.contains(postTitle).click({force:true});
    }
    checksEspecificPostFromPostListByTitle(postTitle){
        cy.get('ol').find('h3').contains(postTitle)
        .should('have.text', `\n        ${postTitle}\n    `);  
    }
    selectsActualPostToBePublished(){
        cy.get('.gh-publishmenu').click();
        cy.get('.gh-publishmenu-button').click(); 
    };
    selectsActualPostToBeScheduled(){
        cy.get('.gh-publishmenu').click();
        cy.get('.gh-publishmenu-radio-label').click({multiple:true});
        cy.get('.gh-publishmenu-button').click(); 
    };

    filterPostListByPublished(){
        cy.get('.gh-contentfilter-type').click();
        cy.get('ul li[data-option-index="2"]').click();
    }
    filterPostListByScheduled(){
        cy.get('.gh-contentfilter-type').click();
        cy.get('ul li[data-option-index="3"]').click();
    }
    sortPostListByNewestToOldest(){
        cy.get('.gh-contentfilter-sort').click();
        cy.get('ul li[data-option-index="2"]').click();  
    }

}