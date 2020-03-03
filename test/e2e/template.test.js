const { assert, driver, By } = require('vl-ui-core').Test.Setup;
const VlTemplatePage = require('./pages/vl-template.page');

describe('vl-template', async () => {
    const vlTemplatePage = new VlTemplatePage(driver);

    before(() => {
        return vlTemplatePage.load();
    });

    it('Als gebruiker kan ik de header zien', async () => {
        const template = await vlTemplatePage.getTemplate();
        await assert.eventually.isNotNull(template.getHeader());
    });

    it('Als gebruiker kan ik de footer zien', async () => {
        const template = await vlTemplatePage.getTemplate();
        await assert.eventually.isNotNull(template.getFooter());
    });

    it('Als gebruiker kan ik de content zien', async () => {
        const template = await vlTemplatePage.getTemplate();
        const contentSlotElements = await template.getContentSlotElements();
        assert.lengthOf(contentSlotElements, 1);
        assert.isNotNull(contentSlotElements);
        const h2 = await contentSlotElements[0].findElement(By.css('h2'));
        await assert.eventually.equal(h2.getText(), 'Code voorbeeld');
    });
});
