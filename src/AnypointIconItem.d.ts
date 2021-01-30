import { TemplateResult, LitElement, CSSResult } from 'lit-element';
import { ButtonStateMixin, ControlStateMixin, HoverableMixin } from '@anypoint-web-components/anypoint-control-mixins';

/**
 * `anypoint-icon-item`
 * An Anypoint icon list item is a convenience element to make an item with icon. It is an
 * interactive list item with a fixed-width icon area.
 * This is useful if the icons are of varying widths, but you want the item
 * bodies to line up. Use this like a `<anypoint-item>`. The child node with the slot
 * name `item-icon` is placed in the icon area.
 */
export declare class AnypointIconItem extends HoverableMixin(ControlStateMixin(ButtonStateMixin(LitElement))) {
  get styles(): CSSResult;
  /**
   * @deprecated Use `compatibility` instead.
   */
  legacy: boolean;

  /**
   * Enables compatibility with Anypoint components.
   * @attribute
   */
  compatibility: boolean;
  render(): TemplateResult;
  connectedCallback(): void;
}
