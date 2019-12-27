import{VlElement,define}from"/node_modules/vl-ui-core/vl-core.js";export class VlTemplate extends VlElement(HTMLElement){constructor(){super(`
        <style>
            @import '/node_modules/vl-ui-template/style.css';
        </style>
        <vl-header>header</vl-header>
        <div class="vl-page">
          <main class="vl-main-content">
            <slot></slot>
          </main>
        </div>
        <vl-footer>footer</vl-footer>
    `)}};define("vl-template",VlTemplate);