import assert from 'assert';

export default (expectedTitle, done) => {
  assert.ok(browser.getTitle() === expectedTitle);
  done();
};