import { TagsPage } from '../page-objects/tags-page'
import {Constant_PAGES} from "../page-objects/constant-page"
const url = Constant_PAGES.BASE_URL
const delay = Constant_PAGES.DELAY
const user = Constant_PAGES.USER
const password = Constant_PAGES.PASSWORD
const faker = require('faker')
const scenario = "tags_manage";
const version= "3.3.0";
let test="";
let id = 0;


describe('Manage Tags', () => { 
    const tagsPage = new TagsPage()
    let tagName = faker.lorem.words(2)
    let tagEdited = faker.lorem.words(2)
    let tagMeta = faker.lorem.words(2)
    let tagDescription = faker.lorem.sentence()
    let tagMetaDescription = faker.lorem.sentence()
    beforeEach(() => {
        tagsPage.navigate(url + 'ghost/#/signin')
        tagsPage.waitTime(delay)
    })

    it('Login, adding a new tag, and validate it', () => {
        test = 'tags_manage_add_tag';
        id=0;
        tagsPage.waitTime(delay, version, scenario, test, id);
        id++;
        tagsPage.addText('input[name="identification"]', user)
        tagsPage.addText('input[name="password"]', password)
        tagsPage.waitTime(delay, version, scenario, test, id);
        id++;
        tagsPage.clickButton('[id^=ember12]', 0, true)
        tagsPage.waitTime(delay, version, scenario, test, id);
        id++;
        tagsPage.searchByContains('body', 'Tags')
        tagsPage.waitTime(delay, version, scenario, test, id);
        id++;
        tagsPage.searchByContains('body', 'New tag')
        tagsPage.addText('input[name="name"]', tagName)
        tagsPage.addText('textarea[name="description"]', tagDescription)
        tagsPage.waitTime(delay, version, scenario, test, id);
        id++;
        tagsPage.searchByContains('body', 'Save')
        tagsPage.waitTime(delay, version, scenario, test, id);
        id++;
        tagsPage.navigate(url + 'ghost/#/tags')
        tagsPage.waitTime(delay, version, scenario, test, id);
        id++;
        tagsPage.searchByContains('body', tagName)
        tagsPage.waitTime(delay, version, scenario, test, id);
        id++;

    })

    it('Login, editing an existing tag, and validate it', () => {
        test = 'tags_manage_edit_tag';
        id=0;
        tagsPage.waitTime(delay, version, scenario, test, id);
        id++;
        tagsPage.addText('input[name="identification"]', user)
        tagsPage.addText('input[name="password"]', password)
        tagsPage.waitTime(delay, version, scenario, test, id);
        id++;
        tagsPage.clickButton('[id^=ember12]', 0, true)
        tagsPage.waitTime(delay, version, scenario, test, id);
        id++;
        tagsPage.searchByContains('body', 'Tags')
        tagsPage.waitTime(delay, version, scenario, test, id);
        id++;
        tagsPage.searchByContains('body', tagName)
        tagsPage.editText('input[name="name"]', tagEdited, 0)
        tagsPage.waitTime(delay, version, scenario, test, id);
        id++;
        tagsPage.searchByContains('body', 'Save')
        tagsPage.navigate(url + 'ghost/#/tags')
        tagsPage.waitTime(delay, version, scenario, test, id);
        id++;
        tagsPage.searchByContains('body', tagEdited)
        tagsPage.waitTime(delay, version, scenario, test, id);
        id++;
       
    })

    it('Login, adding metadata to existing tag, and validate it', () => {
        test = 'tags_manage_add_metadata';
        id=0;
        tagsPage.waitTime(delay, version, scenario, test, id);
        id++;
        tagsPage.addText('input[name="identification"]', user)
        tagsPage.addText('input[name="password"]', password)
        tagsPage.waitTime(delay, version, scenario, test, id);
        id++;
        tagsPage.clickButton('[id^=ember12]', 0, true)
        tagsPage.waitTime(delay, version, scenario, test, id);
        id++;
        tagsPage.searchByContains('body', 'Tags')
        tagsPage.waitTime(delay, version, scenario, test, id);
        id++;
        tagsPage.searchByContains('body', tagEdited)
        tagsPage.waitTime(delay, version, scenario, test, id);
        id++;
        tagsPage.addText('input[name="metaTitle"]', tagMeta, 0)
        tagsPage.addText('textarea[name="metaDescription"]', tagMetaDescription, 0)
        tagsPage.waitTime(delay, version, scenario, test, id);
        id++;
        tagsPage.searchByContains('body', 'Save')
        tagsPage.navigate(url + 'ghost/#/tags')
        tagsPage.waitTime(delay, version, scenario, test, id);
        id++;
        tagsPage.searchByContains('body', tagEdited)
        tagsPage.waitTime(delay, version, scenario, test, id);
        id++;
              
    })

    it('Login, deleting an existing tag, and validate it', () => {
        test = 'tags_manage_delete_tag';
        id=0;
        tagsPage.waitTime(delay, version, scenario, test, id);
        id++;
        tagsPage.addText('input[name="identification"]', user)
        tagsPage.addText('input[name="password"]', password)
        tagsPage.waitTime(delay, version, scenario, test, id);
        id++;
        tagsPage.clickButton('[id^=ember12]', 0, true)
        tagsPage.waitTime(delay, version, scenario, test, id);
        id++;
        tagsPage.searchByContains('body', 'Tags')
        tagsPage.waitTime(delay, version, scenario, test, id);
        id++;
        tagsPage.searchByContains('body', tagEdited)
        tagsPage.waitTime(delay, version, scenario, test, id);
        id++;
        tagsPage.searchByContains('body', 'Delete tag')
        tagsPage.waitTime(delay, version, scenario, test, id);
        id++;
        tagsPage.deleteTag()
        tagsPage.navigate(url + 'ghost/#/tags')
        tagsPage.waitTime(delay, version, scenario, test, id);
        id++;
       
    })
})
