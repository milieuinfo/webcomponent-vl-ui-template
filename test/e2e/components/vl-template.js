const { VlElement } = require('vl-ui-core').Test;
const { VlHeader } = require('vl-ui-header').Test;
const { VlFooter } = require('vl-ui-footer').Test;
const { By } = require('vl-ui-core').Test.Setup;

class VlTemplate extends VlElement {
    async getHeader() {
        return new VlHeader(this.driver);
    }

    async getContentSlotElements() {
        const slot = await this.shadowRoot.findElement(By.css('slot[name="main"]'));
        return this.getAssignedElements(slot);
    }

    async getFooter() {
        return new VlFooter(this.driver);
    }
}

module.exports = VlTemplate;
