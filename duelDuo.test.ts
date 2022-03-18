
import { Builder, Capabilities, By } from "selenium-webdriver"
// import { titleContains } from "selenium-webdriver/lib/until"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(5000)
})

test('Add to Duo button should display the robot', async () => {
    await driver.findElement(By.id("draw")).click()
    await driver.sleep(1000)
    await driver.findElement(By.xpath("//button[text() = 'Add to Duo']")).click()
    await driver.sleep(1000)
    await driver.findElement(By.xpath("//button[text() = 'Add to Duo']")).click()
    await driver.sleep(1000)
    const duo = await driver.findElement(By.id('player-duo'))
    const displayed = await duo.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(1500)
})

test('See all bots button should display all bots', async () => {
    await driver.findElement(By.id("see-all")).click()
    await driver.sleep(1000)
    const allBots = await driver.findElement(By.id("see-bots"))
    const displayed = await allBots.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(1500)
})