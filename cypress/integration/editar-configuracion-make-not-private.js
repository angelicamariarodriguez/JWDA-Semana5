import { GeneralSettingsPage } from '../page-objects/general-settings-page';
import { LoginPage } from '../page-objects/login-page'
import { SitePage } from '../page-objects/site-page'


const user = Cypress.env('user')
const password = Cypress.env('password')
const delay = Cypress.env('delay') || 100
const title = Cypress.env('newTitle')
const description = Cypress.env('newDescription')

describe('editar configuracion general - make private', () => {

    const loginPage = new LoginPage()
    const sitePage = new SitePage()
    const generalSettingsPage = new GeneralSettingsPage()

    beforeEach(() => {
        loginPage.navigate()
    })

    it('Poner sitio como privado - Configuracion General', () => {
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