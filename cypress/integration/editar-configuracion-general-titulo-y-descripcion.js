import { GeneralSettingsPage } from '../page-objects/general-settings-page';
import { LoginPage } from '../page-objects/login-page'
import { SitePage } from '../page-objects/site-page'


const user = Cypress.env('user')
const password = Cypress.env('password')
const delay = Cypress.env('delay') || 100
const title = Cypress.env('newTitle')
const description = Cypress.env('newDescription')

describe('editar configuracion general - titulo y descripcion', () => {

    const loginPage = new LoginPage()
    const sitePage = new SitePage()
    const generalSettingsPage = new GeneralSettingsPage()

    beforeEach(() => {
        loginPage.navigate()
    })

    it('Editar titulo y descripcion en Configuracion General', () => {
        loginPage.enterUser(user)
        loginPage.enterPassword(password)
        loginPage.clickOnSignIn()
        loginPage.verificarLogin()
        sitePage.irAConfiguracionGeneral()
        cy.wait(delay);
        generalSettingsPage.clickOnExpanForTitleAndDescription()
        cy.wait(delay);
        generalSettingsPage.editTitle(title)
        cy.wait(delay);
        generalSettingsPage.editDescription(description)
        cy.wait(delay)
        generalSettingsPage.saveChanges()
        cy.wait(delay)
        generalSettingsPage.verifyTitle(title)
        generalSettingsPage.verifyDescription(description)

        
    })



})