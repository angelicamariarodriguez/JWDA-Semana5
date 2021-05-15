/// <reference types="cypress"/>

import {PostCreationPage} from '../page-objects/post-creation-page'
import {Constant_PAGES} from "../page-objects/constant-page";

const url = Constant_PAGES.BASE_URL+'ghost/#/signin';
const delay = Constant_PAGES.DELAY

const faker = require('faker');

const userInputID = "ember8";
const passwordInputID = "ember10";
const loginButtonID =  "ember12";
const userNameLogin = Constant_PAGES.USER;
const passwordLogin = Constant_PAGES.PASSWORD;

const scenario = "post_creation";
const version= "3.3.0";
let test="";
let id = 0;


let postCreation = new PostCreationPage;
describe('Post creation', () => {
    
    beforeEach(() => {
      postCreation.navigate(url);

    })

    it('Ingresar con credenciales validos y crear un post con titulo haciendo uso de boton "+"', () => {

        test = 'post_creation_using_plus_button';
        id=0;

        postCreation.waitTime(delay, version, scenario, test, id);
        id++;
        postCreation.fillOutInput(userNameLogin, `[id^=${userInputID}]`);
        postCreation.fillOutInput(passwordLogin, `[id^=${passwordInputID}]`);
           postCreation.waitTime(delay, version, scenario, test, id);
        id++;

        postCreation.clickButton(`[id^=${loginButtonID}]`, 0);

        postCreation.checkElementToHaveTextContent('.gh-user-email', userNameLogin);
           postCreation.waitTime(delay, version, scenario, test, id);
        id++;

        postCreation.clickOnNewPostButton('.gh-nav-manage .gh-secondary-action')
        postCreation.checkElementContent('.gh-editor-header','New')
           postCreation.waitTime(delay, version, scenario, test, id);
        id++;

        let postTitle = faker.lorem.sentence();

        postCreation.typeTextPostTitle('.gh-editor-title',postTitle);
        postCreation.savePostChanges();
        postCreation.goToPostList();
        postCreation.waitTime(1000, version, scenario, test, id);
        id++;

        postCreation.checkElementToHaveTextContent('.gh-canvas-title', 'Posts');
        cy.wait(1000);
        postCreation.checksEspecificPostFromPostListByTitle(postTitle); 
           postCreation.waitTime(delay, version, scenario, test, id);
        id++;               
    })

    it('Ingresar con credenciales validos y crear un post con titulo usando boton "new post"', () => {

        test = 'post_creation_using_new_post_button';
        id=0;

        postCreation.waitTime(delay, version, scenario, test, id);
        id++;
        postCreation.fillOutInput(userNameLogin, `[id^=${userInputID}]`);
        postCreation.fillOutInput(passwordLogin, `[id^=${passwordInputID}]`);
           postCreation.waitTime(delay, version, scenario, test, id);
        id++;
        postCreation.clickButton(`[id^=${loginButtonID}]`, 0);

        postCreation.checkElementToHaveTextContent('.gh-user-email', userNameLogin);
           postCreation.waitTime(delay, version, scenario, test, id);
        id++;

        postCreation.goToPostList();
        postCreation.checkElementToHaveTextContent('.gh-canvas-title', 'Posts');
           postCreation.waitTime(delay, version, scenario, test, id);
        id++;


        postCreation.clickButton(`.gh-btn-green`, 0);
        postCreation.checkElementContent('.gh-editor-header','New')
        postCreation.waitTime(delay, version, scenario, test, id);
        id++;

        let postTitle = faker.lorem.sentence();

        postCreation.typeTextPostTitle('.gh-editor-title',postTitle);
        postCreation.savePostChanges();

        postCreation.goToPostList();
        
        postCreation.checkElementToHaveTextContent('.gh-canvas-title', 'Posts');
        cy.wait(1000);
        postCreation.checksEspecificPostFromPostListByTitle(postTitle);  
           postCreation.waitTime(delay, version, scenario, test, id);
        id++;
    

    })

    it('Ingresar con credenciales validos y crear un post  publico con titulo usando boton "new post" ', () => {
        
        test = 'post_creation_published';
        id=0;

        postCreation.waitTime(delay, version, scenario, test, id);
        id++;
        
        postCreation.fillOutInput(userNameLogin, `[id^=${userInputID}]`);
        postCreation.fillOutInput(passwordLogin, `[id^=${passwordInputID}]`);
        postCreation.clickButton(`[id^=${loginButtonID}]`, 0);

        postCreation.checkElementToHaveTextContent('.gh-user-email', userNameLogin);
           postCreation.waitTime(delay, version, scenario, test, id);
        id++;

        postCreation.goToPostList();
        postCreation.checkElementToHaveTextContent('.gh-canvas-title', 'Posts');
           postCreation.waitTime(delay, version, scenario, test, id);
        id++;


        postCreation.clickButton(`.gh-btn-green`, 0);
        postCreation.checkElementContent('.gh-editor-header','New')
           postCreation.waitTime(delay, version, scenario, test, id);
        id++;

        let postTitle = faker.lorem.sentence();

        postCreation.typeTextPostTitle('.gh-editor-title',postTitle);
        postCreation.savePostChanges();
        postCreation.goToPostList();
        
        postCreation.checkElementToHaveTextContent('.gh-canvas-title', 'Posts');

        postCreation.goToPostByTitle(postTitle);

        postCreation.selectsActualPostToBePublished();
           postCreation.waitTime(delay, version, scenario, test, id);
        id++;

  
        postCreation.goToPostList();
        postCreation.checkElementToHaveTextContent('.gh-canvas-title', 'Posts');
           postCreation.waitTime(delay, version, scenario, test, id);
        id++;
       
        postCreation.checksEspecificPostFromPostListByTitle(postTitle); 
        postCreation.waitTime(delay, version, scenario, test, id);
        id++; 


    });

    it('Ingresar con credenciales validos y crear un post programado para publicarse (scheduled) en 4 minutos con titulo usando boton "new post"', () => {
        test = 'post_creation_scheduled';
        id=0;

        postCreation.waitTime(delay, version, scenario, test, id);
        id++;
       
        postCreation.fillOutInput(userNameLogin, `[id^=${userInputID}]`);
        postCreation.fillOutInput(passwordLogin, `[id^=${passwordInputID}]`);
           postCreation.waitTime(delay, version, scenario, test, id);
        id++;
        postCreation.clickButton(`[id^=${loginButtonID}]`, 0);

        postCreation.checkElementToHaveTextContent('.gh-user-email', userNameLogin);
           postCreation.waitTime(delay, version, scenario, test, id);
        id++;

        postCreation.goToPostList();
        postCreation.checkElementToHaveTextContent('.gh-canvas-title', 'Posts');
           postCreation.waitTime(delay, version, scenario, test, id);
        id++;


        postCreation.clickButton(`.gh-btn-green`, 0);
        postCreation.checkElementContent('.gh-editor-header','New')
           postCreation.waitTime(delay, version, scenario, test, id);
        id++;

        let postTitle = faker.lorem.sentence();

        postCreation.typeTextPostTitle('.gh-editor-title',postTitle);
        postCreation.savePostChanges();
        postCreation.goToPostList();
        
        postCreation.checkElementToHaveTextContent('.gh-canvas-title', 'Posts');
        postCreation.goToPostByTitle(postTitle);
        postCreation.selectsActualPostToBeScheduled();
 
           postCreation.waitTime(delay, version, scenario, test, id);
        id++;

        postCreation.goToPostList();
        postCreation.checkElementToHaveTextContent('.gh-canvas-title', 'Posts');
        postCreation.waitTime(delay, version, scenario, test, id);
        id++;
       
        postCreation.checksEspecificPostFromPostListByTitle(postTitle); 
        postCreation.waitTime(delay, version, scenario, test, id);
        id++; 


    });


});
