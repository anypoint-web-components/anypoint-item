import { TemplateResult, LitElement, CSSResult } from 'lit-element';

/**
 * `anypoint-item`
 * An Anypoint list item with 2 or 3 lines.
 */
export declare class AnypointItemBody extends LitElement {
  readonly styles: CSSResult;
  legacy: boolean;

  /**
   * Enables compatibility with Anypoint components.
   */
  compatibility: boolean;
  constructor();
  render(): TemplateResult;
}
