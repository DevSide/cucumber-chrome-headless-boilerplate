export default (url, done) => {
  browser.url(url);

  browser.waitUntil(() => {
    const result = browser.execute(() => document.readyState === 'complete');

    return !!result.value;
  }, 2000, 'Resources are not loaded after 2s');

  done();
};