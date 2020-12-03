const VlTemplate = require('../components/vl-template');
const {Page, Config} = require('vl-ui-core').Test;
const {VlDemoPage} = require('vl-ui-demo').Test;

class VlTemplatePage extends Page {
  async getTemplate() {
    const demo = await new VlDemoPage(this.driver, 'vl-demo-page');
    return new VlTemplate(this.driver, demo.shadowRoot);
  }

  async load() {
    await super.load(Config.baseUrl + '/demo/vl-template.html');
  }
}

module.exports = VlTemplatePage;
