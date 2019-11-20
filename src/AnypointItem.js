/**
@license
Copyright 2016 The Advanced REST client authors <arc@mulesoft.com>
Licensed under the Apache License, Version 2.0 (the "License"); you may not
use this file except in compliance with the License. You may obtain a copy of
the License at
http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
License for the specific language governing permissions and limitations under
the License.
*/
import { LitElement, html, css } from 'lit-element';
import {
  ButtonStateMixin,
  ControlStateMixin,
  HoverableMixin,
} from '@anypoint-web-components/anypoint-control-mixins/anypoint-control-mixins.js';
import styles from './ItemStyles.js';
/**
 * `anypoint-item`
 * An Anypoint list item.
 *
 * @customElement
 * @demo demo/index.html
 * @memberof AnypointUi
 */
export class AnypointItem extends HoverableMixin(ControlStateMixin(ButtonStateMixin(LitElement))) {
  get styles() {
    return [
      styles,
      css`
        :host {
          display: flex;
          flex-direction: row;
          align-items: center;
        }
      `,
    ];
  }

  static get properties() {
    return {
      /**
       * Enables compatibility with Anypoint components.
       */
      compatibility: { type: Boolean, reflect: true },
      /**
       * @deprecated Use `compatibility` instead
       */
      legacy: { type: Boolean },
    };
  }

  get legacy() {
    return this.compatibility;
  }

  set legacy(value) {
    this.compatibility = value;
  }

  render() {
    return html`<style>${this.styles}</style>
      <slot></slot>
    `;
  }

  connectedCallback() {
    if (!this.hasAttribute('role')) {
      this.setAttribute('role', 'option');
    }
    if (!this.hasAttribute('tabindex')) {
      this.setAttribute('tabindex', '0');
    }
    if (super.connectedCallback) {
      super.connectedCallback();
    }
  }
}
