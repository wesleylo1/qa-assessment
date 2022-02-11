import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('See All Bots button shows up', async() => {
    const button = await driver.findElement(By.id('see-all'))
    const buttonDisplayed = await button.isDisplayed()
    expect(buttonDisplayed).toBe(true)
})

test('Draw button displays choices', async () => {
    const btn = await driver.findElement(By.id('draw'))
    btn.click();
    const options = await driver.findElement(By.id('choices'))
    const optionsDisplayed = await options.isDisplayed()
    expect(optionsDisplayed).toBe(true)
    
})

// test('add bot', async () => {
//     const btn = await driver.findElement(By.id('draw'))
//     btn.click()
//     const duo = await driver.findElement(By.className('bot-btn'))
//     duo.click()
//     await driver.sleep(2000)
// })