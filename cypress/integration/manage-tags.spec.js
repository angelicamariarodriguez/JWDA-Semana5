import { TagsPage } from '../page-objects/tags-page';
//import { LoginPage } from '../page-objects/login-page'
//import { SitePage } from '../page-objects/site-page'
import {Constant_PAGES} from "../page-objects/constant-page";
const url = Constant_PAGES.BASE_URL
const delay = Constant_PAGES.DELAY
const user = Constant_PAGES.USER
const password = Constant_PAGES.PASSWORD
const title = Constant_PAGES.NEW_TITLE
const description = Constant_PAGES.NEW_DESCRIPTION

describe('Manage Tags', () => {

   // const loginPage = new LoginPage()
   // const sitePage = new SitePage()
    const tagsPage = new TagsPage();

    beforeEach(() => {
        tagsPage.navigate(url + 'ghost/#/signin');
        tagsPage.waitTime(delay);
    })

    it('Add a new tag in Tags menu', () => {
        tagsPage.addText('input[name="identification"]', user);
        tagsPage.addText('input[name="password"]', password);
        tagsPage.clickButton('[id^=ember12]', 0, true);
        tagsPage.waitTime(delay);
        tagsPage.searchByContains('body', 'Tags');
        tagsPage.waitTime(delay);
        tagsPage.goToContent("New tag");
        tagsPage.addText('input[name="name"]', "new tag1");
        tagsPage.addText('textarea[name="description"]', "new tag1 description");
        tagsPage.searchByContains('body', 'Save');
        //tagsPage.clickButton('[id^=ember12]', 0, true);
        //tagsPage.goToContent("Save");
        tagsPage.waitTime(delay);
        tagsPage.searchByContains('body', 'Tags');
        tagsPage.waitTime(delay);
        tagsPage.verifyByContains('body', 'new tag1');
        //tagsPage.waitTime(delay);
      
    })
/*
    
    it('Editar zona horaria en Configuracion General', () => {
        loginPage.enterUser(user)
        loginPage.enterPassword(password)
        loginPage.clickOnSignIn()
        loginPage.verificarLogin()
        sitePage.irAConfiguracionGeneral()
        cy.wait(delay);
        generalSettingsPage.clickOnExpanForTimeZone()
        cy.wait(delay);
        generalSettingsPage.selectTimeZone()
        generalSettingsPage.saveChanges()
        generalSettingsPage.verifyTimeZoneSelected()

        
    })

    it('Poner sitio como privado - Configuracion General', () => {
        loginPage.enterUser(user)
        loginPage.enterPassword(password)
        loginPage.clickOnSignIn()
        loginPage.verificarLogin()
        sitePage.irAConfiguracionGeneral()
        cy.wait(delay)
        generalSettingsPage.makePrivate()
        generalSettingsPage.saveChanges()
        generalSettingsPage.verifyPrivate()
        
    })

    it('Poner sitio como publico - Configuracion General', () => {
        loginPage.enterUser(user)
        loginPage.enterPassword(password)
        loginPage.clickOnSignIn()
        loginPage.verificarLogin()
        sitePage.irAConfiguracionGeneral()
        cy.wait(delay)
        generalSettingsPage.makeNoPrivate()
        generalSettingsPage.saveChanges()
        generalSettingsPage.verifyNotPrivate()
        
    })


*/


})
