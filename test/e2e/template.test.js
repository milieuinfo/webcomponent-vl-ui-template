const {assert, getDriver, By} = require('vl-ui-core').Test.Setup;
const VlTemplatePage = require('./pages/vl-template.page');

describe('vl-template', async () => {
  let vlTemplatePage;

  before(() => {
    vlTemplatePage = new VlTemplatePage(getDriver());
    return vlTemplatePage.load();
  });

  it('als gebruiker kan ik de content zien', async () => {
    const template = await vlTemplatePage.getTemplate();
    const contentSlotElements = await template.getContentSlotElements();
    assert.lengthOf(contentSlotElements, 1);
    assert.isNotNull(contentSlotElements);
    const h2 = await contentSlotElements[0].findElement(By.css('h2'));
    await assert.eventually.equal(h2.getText(), 'Demo\'s');
  });

  it('als gebruiker kan ik de header zien', async () => {
    const template = await vlTemplatePage.getTemplate();
    const headerSlotElements = await template.getHeaderSlotElements();
    assert.lengthOf(headerSlotElements, 1);
    assert.isNotNull(headerSlotElements);
    await assert.eventually.equal(headerSlotElements[0].getTagName(), 'vl-header');
  });
  
  it('als gebruiker kan ik de footer zien', async () => {
    const template = await vlTemplatePage.getTemplate();
    const footerSlotElements = await template.getFooterSlotElements();
    assert.lengthOf(footerSlotElements, 1);
    assert.isNotNull(footerSlotElements);
    await assert.eventually.equal(footerSlotElements[0].getTagName(), 'vl-footer');
  });
});
