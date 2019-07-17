import{VlElement,define}from"/node_modules/vl-ui-core/vl-core.js";export class VlTemplate extends VlElement(HTMLElement){constructor(){super(`
            <style>
                @import '/node_modules/vl-ui-template/style.css';
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
        `)}};define("vl-template",VlTemplate);