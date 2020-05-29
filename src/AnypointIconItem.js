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
} from '@anypoint-web-components/anypoint-control-mixins';
import styles from './ItemStyles.js';

/* eslint-disable class-methods-use-this */

/**
 * `anypoint-icon-item`
 * An Anypoint icon list item is a convenience element to make an item with icon. It is an
 * interactive list item with a fixed-width icon area.
 * This is useful if the icons are of varying widths, but you want the item
 * bodies to line up. Use this like a `<anypoint-item>`. The child node with the slot
 * name `item-icon` is placed in the icon area.
 */
export class AnypointIconItem extends HoverableMixin(ControlStateMixin(ButtonStateMixin(LitElement))) {
  get styles() {
    return [
      styles,
      css`
        :host {
          display: flex;
          flex-direction: row;
          align-items: center;
        }

        .content-icon {
          display: flex;
          flex-direction: row;
          align-items: center;
          width: var(--anypoint-item-icon-width, 40px);
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
      <div class="content-icon">
        <slot name="item-icon"></slot>
      </div>
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
