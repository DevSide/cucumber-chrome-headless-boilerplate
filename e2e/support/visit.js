export default url => {
  browser.url(url);

  return browser.waitUntil(() => {
    const result = browser.execute(() => document.readyState === 'complete');

    return !!result.value;
  }, 2000, 'Resources are not loaded after 2s');
};