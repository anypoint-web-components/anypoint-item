import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {IronButtonState} from '@polymer/iron-behaviors/iron-button-state.js';
import {IronControlState} from '@polymer/iron-behaviors/iron-control-state.js';
import * as Polymer from '@polymer/polymer/lib/legacy/class.js';
import '@anypoint-components/anypoint-styles/typography.js';
import '@polymer/iron-flex-layout/iron-flex-layout.js';
import './anypoint-item-shared-styles.js';
/**
 * `anypoint-icon-item`
 * An Anypoint list item
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 * @memberof AnypointComponents
 */
class AnypointIconItem extends Polymer.mixinBehaviors([IronButtonState, IronControlState], PolymerElement) {
  static get template() {
    return html`
    <style include="anypoint-item-shared-styles"></style>
    <style>
    :host {
      @apply --layout-horizontal;
      @apply --layout-center;
      @apply --anypoint-font-common-base;
      @apply --anypoint-item;
      @apply --anypoint-icon-item;
    }

    .content-icon {
      @apply --layout-horizontal;
      @apply --layout-center;
      width: var(--anypoint-item-icon-width, 40px);
      @apply --anypoint-item-icon;
    }
    </style>
    <div class="content-icon">
      <slot name="item-icon"></slot>
    </div>
    <slot></slot>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    if (!this.hasAttribute('role')) {
      this.setAttribute('role', 'option');
    }
    if (!this.hasAttribute('tabindex')) {
      this.setAttribute('tabindex', '0');
    }
  }
}

window.customElements.define('anypoint-icon-item', AnypointIconItem);
