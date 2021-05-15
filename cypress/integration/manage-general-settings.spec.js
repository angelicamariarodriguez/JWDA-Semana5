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
const scenario = "manage_settings";
const version= "3.42.5";
let test="";
let id = 0;

describe('Manage General Settings', () => {

    const loginPage = new LoginPage()
    const sitePage = new SitePage()
    const generalSettingsPage = new GeneralSettingsPage()

    beforeEach(() => {
        loginPage.navigate(url + 'ghost/#/signin')
        loginPage.waitTime(delay);
    })

    it('Editar titulo y descripcion en Configuracion General', () => {
        test = 'edit_title_and_description';
        id=0;

        generalSettingsPage.waitTime(delay, version, scenario, test, id);
        id++;
        loginPage.enterUser(user)
        generalSettingsPage.waitTime(delay, version, scenario, test, id);
        id++;
        loginPage.enterPassword(password)
        generalSettingsPage.waitTime(delay, version, scenario, test, id);
        id++;
        loginPage.clickOnSignIn()
        generalSettingsPage.waitTime(delay, version, scenario, test, id);
        id++;
        loginPage.verificarLogin()
        generalSettingsPage.waitTime(delay, version, scenario, test, id);
        id++;
        sitePage.irAConfiguracionGeneral()
        generalSettingsPage.waitTime(delay, version, scenario, test, id);
        id++;
        generalSettingsPage.clickOnExpanForTitleAndDescription()
        generalSettingsPage.waitTime(delay, version, scenario, test, id);
        id++;
        generalSettingsPage.editTitle(title)
        generalSettingsPage.waitTime(delay, version, scenario, test, id);
        id++;
        generalSettingsPage.editDescription(description)
        generalSettingsPage.waitTime(delay, version, scenario, test, id);
        id++;
        generalSettingsPage.saveChanges()
        generalSettingsPage.waitTime(delay, version, scenario, test, id);
        id++;
        generalSettingsPage.verifyTitle(title)
        generalSettingsPage.waitTime(delay, version, scenario, test, id);
        id++;
        generalSettingsPage.verifyDescription(description)
        generalSettingsPage.waitTime(delay, version, scenario, test, id);
        id++;

        
    })

    
    it('Editar zona horaria en Configuracion General', () => {
        test = 'edit_time_zone';
        id=0;

        generalSettingsPage.waitTime(delay, version, scenario, test, id);
        id++;

        loginPage.enterUser(user)
        generalSettingsPage.waitTime(delay, version, scenario, test, id);
        id++;
        loginPage.enterPassword(password)
        generalSettingsPage.waitTime(delay, version, scenario, test, id);
        id++;
        loginPage.clickOnSignIn()
        generalSettingsPage.waitTime(delay, version, scenario, test, id);
        id++;
        loginPage.verificarLogin()
        generalSettingsPage.waitTime(delay, version, scenario, test, id);
        id++;
        sitePage.irAConfiguracionGeneral()
        generalSettingsPage.waitTime(delay, version, scenario, test, id);
        id++;
        generalSettingsPage.clickOnExpanForTimeZone()
        generalSettingsPage.waitTime(delay, version, scenario, test, id);
        id++;
        generalSettingsPage.selectTimeZone(timeZone)
        generalSettingsPage.waitTime(delay, version, scenario, test, id);
        id++;
        generalSettingsPage.saveChanges()
        generalSettingsPage.waitTime(delay, version, scenario, test, id);
        id++;
        generalSettingsPage.verifyTimeZoneSelected(timeZone)
        generalSettingsPage.waitTime(delay, version, scenario, test, id);
        id++;

        
    })


    it('Cambiar privacidad del sitio - Configuracion General', () => {
        test = 'edit_privacy_of_site';
        id=0;

        generalSettingsPage.waitTime(delay, version, scenario, test, id);
        id++;
        loginPage.enterUser(user)
        generalSettingsPage.waitTime(delay, version, scenario, test, id);
        id++;
        loginPage.enterPassword(password)
        generalSettingsPage.waitTime(delay, version, scenario, test, id);
        id++;
        loginPage.clickOnSignIn()
        generalSettingsPage.waitTime(delay, version, scenario, test, id);
        id++;
        loginPage.verificarLogin()
        generalSettingsPage.waitTime(delay, version, scenario, test, id);
        id++;
        sitePage.irAConfiguracionGeneral()
        generalSettingsPage.waitTime(delay, version, scenario, test, id);
        id++;
        generalSettingsPage.changePrivacy()
        generalSettingsPage.waitTime(delay, version, scenario, test, id);
        id++;
        generalSettingsPage.saveChanges()
        generalSettingsPage.waitTime(delay, version, scenario, test, id);
        id++;
        generalSettingsPage.verifyPrivate()
        generalSettingsPage.waitTime(delay, version, scenario, test, id);
        id++;        
        
    })

    it('Editar Lenguaje en Configuracion General', () => {
        test = 'edit_language_of_site';
        id=0;

        generalSettingsPage.waitTime(delay, version, scenario, test, id);
        id++;
        loginPage.enterUser(user)
        generalSettingsPage.waitTime(delay, version, scenario, test, id);
        id++;
        loginPage.enterPassword(password)
        generalSettingsPage.waitTime(delay, version, scenario, test, id);
        id++;
        loginPage.clickOnSignIn()
        generalSettingsPage.waitTime(delay, version, scenario, test, id);
        id++;
        loginPage.verificarLogin()
        generalSettingsPage.waitTime(delay, version, scenario, test, id);
        id++;
        sitePage.irAConfiguracionGeneral()
        generalSettingsPage.waitTime(delay, version, scenario, test, id);
        id++;
        generalSettingsPage.clickOnExpanForLanguage()
        generalSettingsPage.waitTime(delay, version, scenario, test, id);
        id++;
        generalSettingsPage.editLanguage(language)
        generalSettingsPage.waitTime(delay, version, scenario, test, id);
        id++;
        generalSettingsPage.saveChanges()
        generalSettingsPage.waitTime(delay, version, scenario, test, id);
        id++;
        generalSettingsPage.verifyLanguage(language)
        generalSettingsPage.waitTime(delay, version, scenario, test, id);
        id++;

        
    })

})
