import { TemplateResult, LitElement, CSSResult } from 'lit-element';
import { ButtonStateMixin, ControlStateMixin, HoverableMixin } from '@anypoint-web-components/anypoint-control-mixins';

/**
 * `anypoint-item`
 * An Anypoint list item.
 */
export declare class AnypointItem extends HoverableMixin(ControlStateMixin(ButtonStateMixin(LitElement))) {
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
