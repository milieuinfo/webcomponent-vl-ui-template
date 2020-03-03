const { VlElement } = require('vl-ui-core').Test;
const { By } = require('vl-ui-core').Test.Setup;

class VlTemplate extends VlElement {
    async getHeaderSlotElements() {
        const slot = await this.shadowRoot.findElement(By.css('slot[name="header"]'));
        return this.getAssignedElements(slot);
    }

    async getContentSlotElements() {
        const slot = await this.shadowRoot.findElement(By.css('slot[name="main"]'));
        return this.getAssignedElements(slot);
    }

    async getFooterSlotElements() {
        const slot = await this.shadowRoot.findElement(By.css('slot[name="footer"]'));
        return this.getAssignedElements(slot);
    }
}

module.exports = VlTemplate;
