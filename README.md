# <anypoint-item>

An Anypoint list item

## Usage

Install element:

```
npm i --save @anypoint-components/anypoint-item
```

Import into your app:

```html
<script type="module" src="node_modules/@anypoint-components/anypoint-item.js"></script>
<script type="module" src="node_modules/@anypoint-components/anypoint-icon-item.js"></script>
```

Or into another component

```javascript
import '@anypoint-components/anypoint-item.js';
import '@anypoint-components/anypoint-icon-item.js';
```

Use it:

```html
<div role="listbox">
  <anypoint-item>Option</anypoint-item>
  <anypoint-item>
    <p>Paragraph as a child</p>
  </anypoint-item>
</div>
<div role="listbox">
  <anypoint-icon-item>
    <iron-icon icon="anypoint:refresh" slot="item-icon"></iron-icon>
    Refresh
  </anypoint-icon-item>
  <anypoint-icon-item>
    <span slot="item-icon" class="circle"></span>
    Refresh
  </anypoint-icon-item>
</div>
<style>
.circle {
  width: 25px;
  height: 25px;
  background-color: red;
  border-radius: 50%;
}
</style>
```

## Development

### Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) and npm (packaged with [Node.js](https://nodejs.org)) installed. Run `npm install` to install your element's dependencies, then run `polymer serve` to serve your element locally.

### Viewing Your Element

```
$ polymer serve
```

### Running Tests

```
$ polymer test
```

Your application is already set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester). Run `polymer test` to run your application's test suite locally.
