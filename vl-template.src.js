import {VlElement, define} from '/node_modules/vl-ui-core/vl-core.js';
// import {VlHeader} from '/node_modules/vl-ui-header/vl-header.js';
// import {VlFooter} from '/node_modules/vl-ui-footer/vl-footer.js';
// todo add to package.json:
//     "vl-ui-header": "1.0.0",
//     "vl-ui-footer": "1.0.0"

/**
 * VlTemplate
 * @class
 * @classdesc De standaard template voor websites en applicaties van de Vlaamse overheid. <a href="demo/vl-template.html">Demo</a>.
 *
 * @extends VlElement
 *
 * @property {slot} header - header content binnen vl-header
 * @property {slot} main - main content
 * @property {slot} footer - footer content binnen vl-footer
 * 
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-template/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-template/issues|Issues}
 */
export class VlTemplate extends VlElement(HTMLElement) {
  constructor() {
    super(`
            <style>
                @import '../style.css';
            </style>
            <vl-header>
              <slot name="header"></slot>
            </vl-header>
            <div class="vl-page">
              <main class="vl-main-content">
                <slot name="main"></slot>
              </main>
            </div>
            <vl-footer>
              <slot name="footer"></slot>
            </vl-footer>
        `);
  }
}

define('vl-template', VlTemplate);
