import {browser, element, By} from 'protractor'
expect as any
describe('Test', function () {
    // it('First test', function () {
    //     const URL = 'https://movies-finder.firebaseapp.com/'
    //     browser.get(URL)
    //     browser.sleep(10000)
    //     expect(browser.getCurrentUrl()).toEqual(URL);
    //     expect(browser.getTitle()).toEqual('Movies Finder')
    // })

    // it('Second test', function () {
    //     const URL = 'https://movies-finder.firebaseapp.com/'
    //
    //     browser.get(URL)
    //     browser.sleep(10000)
    //     let searchField = element(By.css('input.form-control'))
    //     //   expect(browser.getCurrentUrl()).toEqual(URL);
    //     //   searchField.isDisplayed()
    //     //expect(searchField.isPresent()).toBeTruthy()
    //     //expect(searchField.isDisplayed()).toBeTruthy()
    //     expect(searchField.getAttribute('placeholder')).toEqual('Search for movies...')
    //
    // })
    it('Third test', function () {
        const URL = 'https://movies-finder.firebaseapp.com/'

        browser.get(URL)
        browser.sleep(3000)
        let searchField = element(By.css('input.form-control'))
        //   expect(browser.getCurrentUrl()).toEqual(URL);
        //   searchField.isDisplayed()
        //expect(searchField.isPresent()).toBeTruthy()
        //expect(searchField.isDisplayed()).toBeTruthy()
        searchField.sendKeys('HELLO WORLD')
        browser.sleep(3000)
        element(By.css('span.input-group-btn button.btn btn-primary')).click()
        browser.sleep(5000)
        //expect(searchField.getAttribute('placeholder')).toEqual('Search for movies...')

     })
})