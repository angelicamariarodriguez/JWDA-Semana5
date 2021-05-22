import { GeneralSettingsPage } from '../page-objects/general-settings-page';
import { LoginPage } from '../page-objects/login-page'
import { SitePage } from '../page-objects/site-page'
import {Constant_PAGES} from "../page-objects/constant-page";
const url = Constant_PAGES.BASE_URL
const delay = Constant_PAGES.DELAY
const user = Constant_PAGES.USER
const password = Constant_PAGES.PASSWORD

import data_for_edit_title_and_description from '../data/data_for_edit_title_and_description.json'
import data_for_edit_language from '../data/data_for_edit_language.json'

describe('Manage General Settings', () => {

    const loginPage = new LoginPage()
    const sitePage = new SitePage()
    const generalSettingsPage = new GeneralSettingsPage()

    beforeEach(() => {
        loginPage.navigate(url + 'ghost/#/signin')
        loginPage.waitTime(delay);
    })

    let data = data_for_edit_title_and_description;
    let languages = data_for_edit_language;

    for (let item = 0; item<20;item++){
        it('Editar titulo y descripcion en Configuracion General', () => {

            loginPage.enterUser(user)
            loginPage.enterPassword(password)
            loginPage.clickOnSignIn()
            loginPage.verificarLogin()
            cy.wait(delay)
            sitePage.irAConfiguracionGeneral()
            cy.wait(delay)
            generalSettingsPage.clickOnExpanForTitleAndDescription()
            cy.wait(delay)
            generalSettingsPage.editTitle(data[item].siteTitle)
            cy.wait(delay)
            generalSettingsPage.editDescription(data[item].siteDescription)
            cy.wait(delay)
            generalSettingsPage.saveChanges()
            cy.wait(delay)
            generalSettingsPage.verifyTitle(data[item].siteTitle)
            cy.wait(delay)
            generalSettingsPage.verifyDescription(data[item].siteDescription)
            cy.wait(delay)       
        });
    
    }


    for (let item = 0; item<10;item++){

    it('Editar Lenguaje en Configuracion General', () => {
        loginPage.enterUser(user)
        loginPage.enterPassword(password)
        loginPage.clickOnSignIn()
        loginPage.verificarLogin()
        sitePage.irAConfiguracionGeneral()
        cy.wait(delay)  
        generalSettingsPage.clickOnExpanForLanguage()
        cy.wait(delay)  
        generalSettingsPage.editLanguage(languages[item].language)
        cy.wait(delay)  
        generalSettingsPage.saveChanges()
        cy.wait(delay)  
        generalSettingsPage.verifyLanguage(languages[item].language)    
        cy.wait(delay)      
    })
    }
})
