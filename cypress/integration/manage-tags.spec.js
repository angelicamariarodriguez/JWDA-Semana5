import { TagsPage } from '../page-objects/tags-page'
import {Constant_PAGES} from "../page-objects/constant-page"
const url = Constant_PAGES.BASE_URL
const delay = Constant_PAGES.DELAY
const user = Constant_PAGES.USER
const password = Constant_PAGES.PASSWORD
const title = Constant_PAGES.NEW_TITLE
const description = Constant_PAGES.NEW_DESCRIPTION

const faker = require('faker')

describe('Manage Tags', () => { 
    const tagsPage = new TagsPage()
    beforeEach(() => {
        tagsPage.navigate(url + 'ghost/#/signin')
        tagsPage.waitTime(delay)
    })

    it('Login, adding a new tag, and validate it', () => {
        tagsPage.addText('input[name="identification"]', user)
        tagsPage.addText('input[name="password"]', password)
        tagsPage.clickButton('[id^=ember12]', 0, true)
        tagsPage.waitTime(delay)
        tagsPage.searchByContains('body', 'Tags')
        tagsPage.waitTime(delay)
        tagsPage.searchByContains('body', 'New tag')
        tagsPage.addText('input[name="name"]', "new tag1")
        tagsPage.addText('textarea[name="description"]', "new tag1 description")
        tagsPage.searchByContains('body', 'Save')
        tagsPage.waitTime(delay)
        tagsPage.navigate(url + 'ghost/#/tags')
        tagsPage.waitTime(delay)
        tagsPage.searchByContains('body', 'new tag1')
        tagsPage.waitTime(delay)
    })

    it('Login, editing an existing tag, and validate it', () => {
        tagsPage.addText('input[name="identification"]', user)
        tagsPage.addText('input[name="password"]', password)
        tagsPage.clickButton('[id^=ember12]', 0, true)
        tagsPage.waitTime(delay)
        tagsPage.searchByContains('body', 'Tags')
        tagsPage.waitTime(delay)
        tagsPage.searchByContains('body', 'new tag1')
        tagsPage.editText('input[name="name"]', "new tag1 edited", 0)
        //tagsPage.editText('textarea[name="description"]', "new tag1 edited", 0)
        tagsPage.searchByContains('body', 'Save')
        tagsPage.navigate(url + 'ghost/#/tags')
        tagsPage.waitTime(delay)
        tagsPage.searchByContains('body', 'new tag1 edited')
        tagsPage.waitTime(delay)
       
    })

    it('Login, addint metadats to existing tag, and validate it', () => {
        tagsPage.addText('input[name="identification"]', user)
        tagsPage.addText('input[name="password"]', password)
        tagsPage.clickButton('[id^=ember12]', 0, true)
        tagsPage.waitTime(delay)
        tagsPage.searchByContains('body', 'Tags')
        tagsPage.waitTime(delay)
        tagsPage.searchByContains('body', 'new tag1 edited')
        tagsPage.editText('input[name="metaTitle"]', "new tag1 edited", 0)
        tagsPage.editText('textarea[name="metaDescription"]', "new tag1 edited", 0)
        tagsPage.searchByContains('body', 'Save')
        tagsPage.navigate(url + 'ghost/#/tags')
        tagsPage.waitTime(delay)
        tagsPage.searchByContains('body', 'new tag1 edited')
        tagsPage.waitTime(delay)
       
    })

    it('Login, deleting an existing tag, and validate it', () => {
        tagsPage.addText('input[name="identification"]', user)
        tagsPage.addText('input[name="password"]', password)
        tagsPage.clickButton('[id^=ember12]', 0, true)
        tagsPage.waitTime(delay)
        tagsPage.searchByContains('body', 'Tags')
        tagsPage.waitTime(delay)
        tagsPage.searchByContains('body', 'new tag1 edited')
        tagsPage.waitTime(delay)
        tagsPage.searchByContains('body', 'Delete tag')
        tagsPage.waitTime(delay)
        tagsPage.clickButton('.gh-btn-red', 0, true)
        //tagsPage.searchByContains('body', 'Delete')
        tagsPage.navigate(url + 'ghost/#/tags')
        tagsPage.waitTime(delay)
       
    })
})
