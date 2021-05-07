/// <reference types="cypress"/>

import {PostCreationPage} from '../page-objects/post-creation-page'
import {Constant_PAGES} from "../page-objects/constant-page";

const url = Constant_PAGES.BASE_URL+'ghost/#/signin';
const delay = Constant_PAGES.DELAY

const faker = require('faker');

const userInputID = "ember8";
const passwordInputID = "ember10";
const loginButtonID =  "ember12";
const userNameLogin = Constant_PAGES.USER
const passwordLogin = Constant_PAGES.PASSWORD


let postCreation = new PostCreationPage;
describe('Post creation', () => {
    
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