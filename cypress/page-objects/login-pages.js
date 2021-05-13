export class LoginPages {
   navigate(url) {
      cy.visit(url);
   }

   waitTime(delay, version , scenario, test, id){
    cy.wait(delay);
    var fileName = test+"_"+id;
    cy.screenshot(`./${version}/${scenario}/${test}/${fileName}`);
}

    CLickItem(search, index, force ){
	  cy.get(search).then($button => {
          const buttonLink = $button.get(index);
          if(!Cypress.dom.isHidden(buttonLink)) {
            cy.wrap(buttonLink).click({force: force});
         } 
      });
   }

    searchByContains(search, text){
        cy.get(search).contains(text).click()
    }

    searchTheTextExists(search, text){
        cy.get(search).contains(text);
    }

   fillOutInput(text, idSearch){
       const item = cy.get(idSearch).first()
       item.type(text, {force: true});
   }
}
