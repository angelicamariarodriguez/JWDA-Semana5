import {ManagePages} from "../page-objects/manage-pages";
import {Constant_PAGES} from "../page-objects/constant-page";
const url = Constant_PAGES.BASE_URL
const delay = Constant_PAGES.DELAY
const user = Constant_PAGES.USER
const password = Constant_PAGES.PASSWORD
const scenario = "manage_pages";
const version= "3.42.5";
let test="";
let id = 0;
describe('Manage pages', () => {

    const managePages = new ManagePages();

    beforeEach(() => {
        managePages.navigate(url + 'ghost/#/signin' );
        managePages.waitTime(delay);
    })

    it('Should filter the pages with the next items: published pages  ', () => {
        test = 'search_by_published_pages';
        id=0;
        managePages.waitTime(delay, version, scenario, test, id);
        id++;
        managePages.fillOutInput(user, '[id^=ember8]');
        managePages.waitTime(delay, version, scenario, test, id);
        id++;
        managePages.fillOutInput(password, '[id^=ember10]');
        managePages.waitTime(delay, version, scenario, test, id);
        id++;
        managePages.CLickItem('[id^=ember12]', 0, true);
        managePages.waitTime(delay, version, scenario, test, id);
        id++;
        managePages.searchByContains('body', 'Pages');
        managePages.waitTime(delay, version, scenario, test, id);
        id++;
        managePages.searchByContains('body', 'All pages');
        managePages.waitTime(delay, version, scenario, test, id);
        id++;
        managePages.navigate('ghost/#/pages?type=concept');
        managePages.waitTime(delay, version, scenario, test, id);
        id++;
        managePages.searchTheTextExists('body', 'No pages match the current filter');
        managePages.waitTime(delay, version, scenario, test, id);
        id++;
    })

    it('Should filter the pages with the next items: published pages and author  ', () => {
        test = 'search_by_published_pages_and_author';
        id=0;
        managePages.waitTime(delay, version, scenario, test, id);
        id++;
        managePages.fillOutInput(user, '[id^=ember8]');
        managePages.waitTime(delay, version, scenario, test, id);
        id++;
        managePages.fillOutInput(password, '[id^=ember10]');
        managePages.waitTime(delay, version, scenario, test, id);
        id++;
        managePages.CLickItem('[id^=ember12]', 0, true);
        managePages.waitTime(delay, version, scenario, test, id);
        id++;
        managePages.searchByContains('body', 'Pages');
        managePages.waitTime(delay, version, scenario, test, id);
        id++;
        managePages.searchByContains('body', 'All authors');
        managePages.navigate('ghost/#/pages?author=ghost&type=concept');
        managePages.waitTime(delay, version, scenario, test, id);
        id++;
        managePages.searchTheTextExists('body', 'No pages match the current filter');
        managePages.waitTime(delay, version, scenario, test, id);
        id++;
    })

    it('Should filter the pages with the next items: published pages, author  and tag ', () => {
        test = 'search_by_published_pages_tag_and_author';
        id=0;
        managePages.waitTime(delay, version, scenario, test, id);
        id++;
        managePages.fillOutInput(user, '[id^=ember8]');
        managePages.waitTime(delay, version, scenario, test, id);
        id++;
        managePages.fillOutInput(password, '[id^=ember10]');
        managePages.waitTime(delay, version, scenario, test, id);
        id++;
        managePages.CLickItem('[id^=ember12]', 0, true);
        managePages.waitTime(delay, version, scenario, test, id);
        id++;
        managePages.searchByContains('body', 'Pages');
        managePages.waitTime(delay, version, scenario, test, id);
        id++;
        managePages.searchByContains('body', 'All tags');
        managePages.navigate('ghost/#/pages?author=ghost&tag=getting-started&type=concept');
        managePages.waitTime(delay, version, scenario, test, id);
        id++;
        managePages.searchTheTextExists('body', 'No pages match the current filter');
        managePages.waitTime(delay, version, scenario, test, id);
        id++;
    })

    it('Should filter the pages with the next items: published pages,  author, tag and Oldest  ', () => {
        test = 'search_by_published_pages_tag_oldest_and_author';
        id=0;
        managePages.waitTime(delay, version, scenario, test, id);
        id++;
        managePages.fillOutInput(user, '[id^=ember8]');
        managePages.waitTime(delay, version, scenario, test, id);
        id++;
        managePages.fillOutInput(password, '[id^=ember10]');
        managePages.waitTime(delay, version, scenario, test, id);
        id++;
        managePages.CLickItem('[id^=ember12]', 0, true);
        managePages.waitTime(delay, version, scenario, test, id);
        id++;
        managePages.searchByContains('body', 'Pages');
        managePages.waitTime(delay, version, scenario, test, id);
        id++;
        managePages.searchByContains('body', 'Newest');
        managePages.navigate('ghost/#/pages?author=ghost&order=published_at asc&tag=getting-started&type=concept');
        managePages.waitTime(delay, version, scenario, test, id);
        id++;
        managePages.searchTheTextExists('body', 'No pages match the current filter');
        managePages.waitTime(delay, version, scenario, test, id);
        id++;
    })

})
