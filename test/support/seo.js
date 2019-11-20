export const expectTitleToContains = async expectedTitle => {
  return browser.waitUntil(async () => {
    const element = await $('h1')
    const title = await element.getText()

    return title === expectedTitle
  })
}
