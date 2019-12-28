import { VlElement, define } from '/node_modules/vl-ui-core/vl-core.js';
import { VlHeader } from '/node_modules/vl-ui-header/vl-header.js';
import { VlFooter } from '/node_modules/vl-ui-footer/vl-footer.js';

/**
 * VlTemplate
 * @class
 * @classdesc De standaard template voor websites en applicaties van de Vlaamse overheid.
 *
 * @extends VlElement
 *
 * @property {slot} header - header content binnen vl-header
 * @property {slot} main - main content
 * @property {slot} footer - footer content binnen vl-footer
 * 
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-template/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-template/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-template.html|Demo}
 */
export class VlTemplate extends VlElement(HTMLElement) {
  constructor() {
    super();
    this._shadow(`
        <style>
            @import '../style.css';
        </style>
        <vl-header data-vl-identifier="${this.dataset.vlHeaderIdentifier}"></vl-header>
        <div class="vl-page">
          <main class="vl-main-content">
            <slot></slot>
          </main>
        </div>
        <vl-footer data-vl-identifier="${this.dataset.vlFooterIdentifier}"></vl-footer>
    `);
  }
}

define('vl-template', VlTemplate);
