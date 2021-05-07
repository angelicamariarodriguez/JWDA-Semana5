import { GeneralSettingsPage } from '../page-objects/general-settings-page';
import { LoginPage } from '../page-objects/login-page'
import { SitePage } from '../page-objects/site-page'
import {Constant_PAGES} from "../page-objects/constant-page";
const url = Constant_PAGES.BASE_URL
const delay = Constant_PAGES.DELAY
const user = Constant_PAGES.USER
const password = Constant_PAGES.PASSWORD
const title = Constant_PAGES.NEW_TITLE
const description = Constant_PAGES.NEW_DESCRIPTION

describe('Manage General Settings', () => {

    const loginPage = new LoginPage()
    const sitePage = new SitePage()
    const generalSettingsPage = new GeneralSettingsPage()

    beforeEach(() => {
        loginPage.navigate(url + 'ghost/#/signin')
        loginPage.waitTime(delay);
    })

    it('Editar titulo y descripcion en Configuracion General', () => {
        loginPage.enterUser(user)
        loginPage.enterPassword(password)
        loginPage.clickOnSignIn()
        loginPage.verificarLogin()
        sitePage.irAConfiguracionGeneral()
        loginPage.waitTime(delay);
        generalSettingsPage.clickOnExpanForTitleAndDescription()
        loginPage.waitTime(delay);
        generalSettingsPage.editTitle(title)
        loginPage.waitTime(delay);
        generalSettingsPage.editDescription(description)
        loginPage.waitTime(delay);
        generalSettingsPage.saveChanges()
        loginPage.waitTime(delay);
        generalSettingsPage.verifyTitle(title)
        generalSettingsPage.verifyDescription(description)

        
    })

    
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





})
