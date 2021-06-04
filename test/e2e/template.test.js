const {assert, getDriver, By} = require('vl-ui-core').Test.Setup;
const VlTemplatePage = require('./pages/vl-template.page');

describe('vl-template', async () => {
  let vlTemplatePage;

  before(() => {
    vlTemplatePage = new VlTemplatePage(getDriver());
    return vlTemplatePage.load();
  });

  it('WCAG', async () => {
    await assert.eventually.isFalse(vlTemplatePage.hasWcagIssues());
  });

  it('als gebruiker kan ik de content zien', async () => {
    const template = await vlTemplatePage.getTemplate();
    const contentSlotElements = await template.getContentSlotElements();
    assert.lengthOf(contentSlotElements, 1);
    assert.isNotNull(contentSlotElements);
    const h2 = await contentSlotElements[0].findElement(By.css('h2'));
    await assert.eventually.equal(h2.getText(), 'Demo\'s');
  });
});
