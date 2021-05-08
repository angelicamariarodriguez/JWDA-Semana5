import { GeneralSettingsPage } from '../page-objects/general-settings-page';
import { LoginPage } from '../page-objects/login-page'
import { SitePage } from '../page-objects/site-page'
import {Constant_PAGES} from "../page-objects/constant-page";
import { time } from 'faker';
const url = Constant_PAGES.BASE_URL
const delay = Constant_PAGES.DELAY
const user = Constant_PAGES.USER
const password = Constant_PAGES.PASSWORD
const title = Constant_PAGES.NEW_TITLE
const description = Constant_PAGES.NEW_DESCRIPTION
const language = Constant_PAGES.NEW_LANGUAJE
const timeZone = Constant_PAGES.TIME_ZONE


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
        loginPage.waitTime(delay);
        generalSettingsPage.clickOnExpanForTimeZone()
        loginPage.waitTime(delay);
        generalSettingsPage.selectTimeZone(timeZone)
        generalSettingsPage.saveChanges()
        generalSettingsPage.verifyTimeZoneSelected(timeZone)

        
    })


    it('Cambiar privacidad del sitio - Configuracion General', () => {
        loginPage.enterUser(user)
        loginPage.enterPassword(password)
        loginPage.clickOnSignIn()
        loginPage.verificarLogin()
        sitePage.irAConfiguracionGeneral()
        loginPage.waitTime(delay);
        generalSettingsPage.changePrivacy()
        generalSettingsPage.saveChanges()
        loginPage.waitTime(delay);
        generalSettingsPage.verifyPrivate()        
        
    })

    it('Editar Lenguaje en Configuracion General', () => {
        loginPage.enterUser(user)
        loginPage.enterPassword(password)
        loginPage.clickOnSignIn()
        loginPage.verificarLogin()
        sitePage.irAConfiguracionGeneral()
        loginPage.waitTime(delay)
        generalSettingsPage.clickOnExpanForLanguage()
        loginPage.waitTime(delay)
        generalSettingsPage.editLanguage(language)
        loginPage.waitTime(delay)
        generalSettingsPage.saveChanges()
        generalSettingsPage.verifyLanguage(language)

        
    })

})
