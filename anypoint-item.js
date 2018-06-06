import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {IronButtonState} from '@polymer/iron-behaviors/iron-button-state.js';
import {IronControlState} from '@polymer/iron-behaviors/iron-control-state.js';
import * as Polymer from '@polymer/polymer/lib/legacy/class.js';
import '@anypoint-components/anypoint-styles/typography.js';
import '@polymer/iron-flex-layout/iron-flex-layout.js';
import './anypoint-item-shared-styles.js';
/**
 * `anypoint-item`
 * An Anypoint list item
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 * @memberof AnypointComponents
 */
class AnypointItem extends Polymer.mixinBehaviors([IronButtonState, IronControlState], PolymerElement) {
  static get template() {
    return html`
    <style include="anypoint-item-shared-styles"></style>
    <style>
    :host {
      @apply --layout-horizontal;
      @apply --layout-center;
      @apply --anypoint-font-common-base;
      @apply --anypoint-item;
    }
    </style>
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

window.customElements.define('anypoint-item', AnypointItem);
