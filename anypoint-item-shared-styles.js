import '@polymer/iron-flex-layout/iron-flex-layout.js';
import '@anypoint-components/anypoint-styles/colors.js';
import '@anypoint-components/anypoint-styles/default-theme.js';
import '@anypoint-components/anypoint-styles/typography.js';
const $documentContainer = document.createElement('div');
$documentContainer.setAttribute('style', 'display: none;');

$documentContainer.innerHTML = `<dom-module id="anypoint-item-shared-styles">
  <template>
    <style>
      :host, .anypoint-item {
        display: block;
        position: relative;
        min-height: var(--anypoint-item-min-height, 40px);
        padding: 0px 10px;
        cursor: pointer;
        border-left: 2px solid var(--anypoint-color-aluminum4);
        border-right: 2px solid var(--anypoint-color-aluminum4);
      }

      :host(:hover), .anypoint-item:hover {
        color: var(--anypoint-item-focus-color, var(--anypoint-color-coreBlue3));
        border-left: 2px var(--anypoint-color-coreBlue3) solid;
        border-right: 2px var(--anypoint-color-coreBlue3) solid;
      }

      .anypoint-item {
        @apply --anypoint-font-common-base;
        border:none;
        outline: none;
        background: white;
        width: 100%;
        text-align: left;
      }

      :host([hidden]), .anypoint-item[hidden] {
        display: none !important;
      }

      :host(.iron-selected), .anypoint-item.iron-selected {
        font-weight: var(--anypoint-item-selected-weight, bold);
        @apply --anypoint-item-selected;
      }

      :host([disabled]), .anypoint-item[disabled] {
        color: var(--anypoint-item-disabled-color, var(--disabled-text-color));
        @apply --anypoint-item-disabled;
      }

      :host(:focus), .anypoint-item:focus {
        position: relative;
        outline: 0;
        color: var(--anypoint-item-focus-color, var(--anypoint-color-coreBlue3));
        @apply --anypoint-item-focused;
      }

      :host(:focus):before, .anypoint-item:focus:before {
        @apply --layout-fit;
        /* background: currentColor; */
        content: '';
        /* opacity: var(--dark-divider-opacity); */
        pointer-events: none;
        @apply --anypoint-item-focused-before;
      }
    </style>
  </template>
</dom-module>`;

document.head.appendChild($documentContainer);
