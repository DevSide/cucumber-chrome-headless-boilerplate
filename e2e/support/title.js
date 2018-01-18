import assert from 'assert';

export default expectedTitle => {
  assert.ok(browser.getTitle() === expectedTitle);
};