describe('Enter Wikipedia cover page from google', () => {

  it('Open Wikipedia cover page from Google page', () => {
    browser.url('https://www.google.com/');
    browser.pause(2000);
    let input = $('.gLFyf');
    input.setValue('wikipedia')
    browser.pause(2000);
    browser.keys(['Enter'])
    browser.pause(2000);
    let firstResult = $('div.hlcw0c:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > a:nth-child(1) > h3:nth-child(2)');
    firstResult.click();
    browser.pause(2000);
    expect(browser).toHaveUrl('https://es.wikipedia.org/wiki/Wikipedia:Portada');
  });
})