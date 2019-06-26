import{VlElement,define}from"/node_modules/vl-ui-core/vl-core.js";export class VlTemplate extends(VlElement(HTMLElement)){constructor(){super('\n            <style>\n                @import \'/node_modules/vl-ui-template/style.css\';\n            </style>\n            <vl-header>\n              <slot name="header"></slot>\n            </vl-header>\n            <div class="vl-page">\n              <main class="vl-main-content">\n                <slot name="main"></slot>\n              </main>\n            </div>\n            <vl-footer>\n              <slot name="footer"></slot>\n            </vl-footer>\n        ')}};define("vl-template",VlTemplate);