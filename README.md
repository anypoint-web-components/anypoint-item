[![Build Status](https://travis-ci.org/anypoint-web-components/anypoint-item.svg?branch=master)](https://travis-ci.org/anypoint-web-components/anypoint-item)

[![Published on NPM](https://img.shields.io/npm/v/@anypoint-web-components/anypoint-item.svg)](https://www.npmjs.com/package/@anypoint-web-components/anypoint-item)

# anypoint-item

`<anypoint-item>` is an interactive list item. By default, it is a horizontal flexbox.

```html
<anypoint-item>Item</anypoint-item>
```

Use this element with `<anypoint-item-body>` to make styled two-line and three-line items.

```html
<anypoint-item>
  <anypoint-item-body two-line>
    <div>Show your status</div>
    <div secondary>Your status is visible to everyone</div>
  </anypoint-item-body>
  <iron-icon icon="warning"></iron-icon>
</anypoint-item>
```

To use `anypoint-item` as a link, wrap it in an anchor tag. Since `anypoint-item` will already receive focus, you may want to prevent the anchor tag from receiving focus as well by setting its tabindex to -1.

```html
<a href="https://www.polymer-project.org/" tabindex="-1">
  <anypoint-item raised>Polymer Project</anypoint-item>
</a>
```

If you are concerned about performance and want to use `anypoint-item` in a `anypoint-listbox` with many items, you can just use a native `button` with the `anypoint-item` class applied (provided you have correctly included the shared styles):

```javascript
import { LitElement, html, css } from 'lit-element';
import itemStyles from '@anypoint-web-components/anypoint-item/anypoint-item-shared-styles.js';

class SampleElement extends LitElement {
  static get styles() {
    return [
      itemStyles,
      css`...`;
    ];
  }

  render() {
    return html`
    <anypoint-listbox>
      <button class="anypoint-item" role="option">Inbox</button>
      <button class="anypoint-item" role="option">Starred</button>
      <button class="anypoint-item" role="option">Sent mail</button>
    </anypoint-listbox>
    `;
  }
}
customElements.define('sample-element', SampleElement);
```

### Styling

See [anypoint-item-shared-styles.js](anypoint-item-shared-styles.js) for list of CSS variables.

### Accessibility

This element has `role="listitem"` by default. Depending on usage, it may be more appropriate to set `role="menuitem"`, `role="menuitemcheckbox"` or `role="menuitemradio"`.

```html
<anypoint-item role="menuitemcheckbox">
  <anypoint-item-body>
    Show your status
  </anypoint-item-body>
  <paper-checkbox></paper-checkbox>
</anypoint-item>
```
