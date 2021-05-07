/// <reference types="cypress"/>

import {PostCreationPage} from '../page-objects/post-creation-page'

const url = Cypress.config('baseUrl') || "http://localhost:2368/ghost/#/signin"
const delay = Cypress.env('delay') || 100
const faker = require('faker');
const config = require('../../posts-config.json')
let userInputID = config.values.userInputID;
let passwordInputID = config.values.passwordInputID;
let loginButtonID =  config.values.loginButtonID;
let userNameLogin = config .values.userName;
let passwordLogin = config.values.password; 


let postCreation = new PostCreationPage;
describe('Post creation E2E Tests', () => {
    
    beforeEach(() => {
      postCreation.navigate(url);
      postCreation.waitTime(delay);
    })

    it('Ingresar con credenciales validos y crear un post con titulo haciendo uso de boton "+"', () => {
        
        
        postCreation.fillOutInput(userNameLogin, `[id^=${userInputID}]`);
        postCreation.fillOutInput(passwordLogin, `[id^=${passwordInputID}]`);
        postCreation.clickButton(`[id^=${loginButtonID}]`, 0);

        postCreation.checkElementToHaveTextContent('.gh-user-email', userNameLogin);
        postCreation.waitTime(delay);

        postCreation.clickOnNewPostButton('.gh-nav-manage .gh-secondary-action')
        postCreation.checkElementContent('.gh-editor-header','New')
        postCreation.waitTime(delay);

        let postTitle = faker.lorem.sentence();

        postCreation.typeTextPostTitle('.gh-editor-title',postTitle);
        postCreation.savePostChanges();
        postCreation.goToPostList();
        postCreation.waitTime(delay);

        postCreation.checkElementToHaveTextContent('.gh-canvas-title', 'Posts');
        postCreation.waitTime(delay);
        postCreation.checksEspecificPostFromPostListByTitle(postTitle);                
    })

    it('Ingresar con credenciales validos y crear un post con titulo usando boton "new post"', () => {
        postCreation.fillOutInput(userNameLogin, `[id^=${userInputID}]`);
        postCreation.fillOutInput(passwordLogin, `[id^=${passwordInputID}]`);
        postCreation.clickButton(`[id^=${loginButtonID}]`, 0);

        postCreation.checkElementToHaveTextContent('.gh-user-email', userNameLogin);
        postCreation.waitTime(delay);

        postCreation.goToPostList();
        postCreation.checkElementToHaveTextContent('.gh-canvas-title', 'Posts');
        postCreation.waitTime(delay);


        postCreation.clickButton(`.gh-btn-green`, 0);
        postCreation.checkElementContent('.gh-editor-header','New')
        postCreation.waitTime(delay);

        let postTitle = faker.lorem.sentence();

        postCreation.typeTextPostTitle('.gh-editor-title',postTitle);
        postCreation.savePostChanges();
        postCreation.goToPostList();
        
        postCreation.checkElementToHaveTextContent('.gh-canvas-title', 'Posts');
        postCreation.waitTime(delay);

        postCreation.checksEspecificPostFromPostListByTitle(postTitle);  
    

    })

    it('Ingresar con credenciales validos y crear un post  publico con titulo usando boton "new post" ', () => {
        postCreation.fillOutInput(userNameLogin, `[id^=${userInputID}]`);
        postCreation.fillOutInput(passwordLogin, `[id^=${passwordInputID}]`);
        postCreation.clickButton(`[id^=${loginButtonID}]`, 0);

        postCreation.checkElementToHaveTextContent('.gh-user-email', userNameLogin);
        postCreation.waitTime(delay);

        postCreation.goToPostList();
        postCreation.checkElementToHaveTextContent('.gh-canvas-title', 'Posts');
        postCreation.waitTime(delay);


        postCreation.clickButton(`.gh-btn-green`, 0);
        postCreation.checkElementContent('.gh-editor-header','New')
        postCreation.waitTime(delay);

        let postTitle = faker.lorem.sentence();

        postCreation.typeTextPostTitle('.gh-editor-title',postTitle);
        postCreation.savePostChanges();
        postCreation.goToPostList();
        
        postCreation.checkElementToHaveTextContent('.gh-canvas-title', 'Posts');

        postCreation.goToPostByTitle(postTitle);

        postCreation.selectsActualPostToBePublished();
        postCreation.waitTime(delay);

  
        postCreation.goToPostList();
        postCreation.checkElementToHaveTextContent('.gh-canvas-title', 'Posts');
        postCreation.waitTime(delay);
       
        postCreation.checksEspecificPostFromPostListByTitle(postTitle);  
        postCreation.filterPostListByPublished();


    });

    it('Ingresar con credenciales validos y crear un post programado para publicarse (scheduled) en 4 minutos con titulo usando boton "new post"', () => {
        postCreation.fillOutInput(userNameLogin, `[id^=${userInputID}]`);
        postCreation.fillOutInput(passwordLogin, `[id^=${passwordInputID}]`);
        postCreation.clickButton(`[id^=${loginButtonID}]`, 0);

        postCreation.checkElementToHaveTextContent('.gh-user-email', userNameLogin);
        postCreation.waitTime(delay);

        postCreation.goToPostList();
        postCreation.checkElementToHaveTextContent('.gh-canvas-title', 'Posts');
        postCreation.waitTime(delay);


        postCreation.clickButton(`.gh-btn-green`, 0);
        postCreation.checkElementContent('.gh-editor-header','New')
        postCreation.waitTime(delay);

        let postTitle = faker.lorem.sentence();

        postCreation.typeTextPostTitle('.gh-editor-title',postTitle);
        postCreation.savePostChanges();
        postCreation.goToPostList();
        
        postCreation.checkElementToHaveTextContent('.gh-canvas-title', 'Posts');
        postCreation.goToPostByTitle(postTitle);
        postCreation.selectsActualPostToBeScheduled();
 
        postCreation.waitTime(delay);

        postCreation.goToPostList();
        postCreation.checkElementToHaveTextContent('.gh-canvas-title', 'Posts');
        postCreation.waitTime(delay);
       
        postCreation.checksEspecificPostFromPostListByTitle(postTitle);  
        postCreation.filterPostListByScheduled();

    });


});