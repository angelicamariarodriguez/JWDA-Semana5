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
const titleMeta = Constant_PAGES.NEW_META_TITLE
const descriptionMeta = Constant_PAGES.NEW_META_DESCRIPTION

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
        generalSettingsPage.selectTimeZone()
        generalSettingsPage.saveChanges()
        generalSettingsPage.verifyTimeZoneSelected()

        
    })

    it('Editar Meta titulo y Meta descripcion en Configuracion General', () => {
        loginPage.enterUser(user)
        loginPage.enterPassword(password)
        loginPage.clickOnSignIn()
        loginPage.verificarLogin()
        sitePage.irAConfiguracionGeneral()
        loginPage.waitTime(1000);
        generalSettingsPage.clickOnExpanForMetaSettings()
        loginPage.waitTime(delay);
        generalSettingsPage.editMetaTitle(titleMeta)
        loginPage.waitTime(delay);
        generalSettingsPage.verifyTitle(titleMeta)
        loginPage.waitTime(delay);
        generalSettingsPage.editMetaDescription(descriptionMeta)
        loginPage.waitTime(delay);
        generalSettingsPage.saveChanges()
       
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
        
    })

})
