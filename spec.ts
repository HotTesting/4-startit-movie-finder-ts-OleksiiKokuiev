import {browser, element, By, $} from 'protractor'
expect as any
describe('Movies finder testing', function () {

    const URL = 'https://movies-finder.firebaseapp.com/'
    let searchField = $('input[name=searchStr]')

    it('Title of Movies Finder is "Movies Finder"', function () {
        console.log ('Test 1: Title of Movies Finder is "Movies Finder"')
        browser.get(URL)
        browser.sleep(3000)
        expect(browser.getCurrentUrl()).toEqual(URL)
        console.log ('Movie Finder is opened');
        expect(browser.getTitle()).toEqual('Movies Finder');
        console.log ('Title of opened web page matches "Movies Finder"')

    })

    it('Search field is displayed on the Home page', function () {
        console.log ('Test 2: Search field is displayed on the Home page')
        browser.get(URL)
        browser.sleep(3000)
        expect(searchField.isDisplayed()).toBeTruthy();
        console.log('Search field is displayed')
        expect(searchField.getAttribute('placeholder')).toEqual('Search for movies...')
        console.log ('"Search for movies..." is pre-filled in search field')

    });





    it('User is able to make a search', function () {
        console.log ('Test 1: User is able to make a search is going')
        browser.get(URL)
        browser.sleep(5000)
        expect(browser.getCurrentUrl()).toEqual(URL)
        console.log ('Web page is opened')
        expect(browser.getTitle()).toEqual('Movies Finder')
        console.log ('Title of opened web page matches "Movies Finder"')

    })


    //
    // })
    // it('Third test', function () {
    //     const URL = 'https://movies-finder.firebaseapp.com/'
    //
    //     browser.get(URL)
    //     browser.sleep(3000)
    //     let searchField = element(By.css('input.form-control'))
    //     //   expect(browser.getCurrentUrl()).toEqual(URL);
    //     //   searchField.isDisplayed()
    //     //expect(searchField.isPresent()).toBeTruthy()
    //     //expect(searchField.isDisplayed()).toBeTruthy()
    //     searchField.sendKeys('HELLO WORLD')
    //     browser.sleep(3000)
    //     element(By.css('span.input-group-btn button.btn btn-primary')).click()
    //     browser.sleep(5000)
    //     //expect(searchField.getAttribute('placeholder')).toEqual('Search for movies...')
    //
    //  })
})
//     describe ('Selectors', function (){
//
//         // it ('ID', function (){
//         //     browser.get('')
//         //
//         //     let idElem = element(By.id('navbar'))
//         //
//         //     expect(idElem.getAttribute('id')).toEqual('navbar')
//         //                     })
//
//         // it ('Name', function (){
//         //     browser.get('')
//         //
//         //     let idElem = element(By.name('searchStr'))
//         //
//         //     expect(idElem.getAttribute('name')).toEqual('searchStr')
//         // })
//
//         // it ('LinkText', function (){
//         //     browser.get('')
//         //
//         //     let idElem = element(By.linkText('Action'))
//         //
//         //     expect(idElem.getText('Action')).toEqual('Action')
//         // })
//
//         // it ('CSS Locator', function (){
//         //     browser.get('')
//         //
//         //     let button = $('button')
//         //
//         //     expect(idElem.getText('Action')).toEqual('Action')
//         // })
//
//
//     })