import { html } from 'lit-html';
import { ArcDemoPage } from '@advanced-rest-client/arc-demo-helper/ArcDemoPage.js';
import '@anypoint-web-components/anypoint-checkbox/anypoint-checkbox.js';
import '@advanced-rest-client/arc-demo-helper/arc-interactive-demo.js';
import '@polymer/iron-icon/iron-icon.js';
import '@anypoint-web-components/anypoint-icons/anypoint-icons.js';
import '../anypoint-item.js';
import '../anypoint-icon-item.js';
import '../anypoint-item-body.js';

class ComponentDemo extends ArcDemoPage {
  constructor() {
    super();
    this.initObservableProperties([
      'demoLegacy',
      'demoWithIcon',
      'demoTwoLines'
    ]);
    this._componentName = 'anypoint-dropdown-menu';
    this.demoStates = ['Normal', 'Legacy'];
    this._mainDemoStateHandler = this._mainDemoStateHandler.bind(this);
    this._toggleDemoOption = this._toggleDemoOption.bind(this);
  }

  _mainDemoStateHandler(e) {
    const state = e.detail.value;
    switch (state) {
      case 0:
        this.demoLegacy = false;
        break;
      case 1:
        this.demoLegacy = true;
        break;
    }
  }

  _toggleDemoOption(e) {
    const { name, checked } = e.target;
    this[name] = checked;
  }

  _demoTemplate() {
    const {
      demoStates,
      darkThemeActive,
      demoLegacy
    } = this;
    return html`<section class="documentation-section">
    <h3>Interactive demo</h3>
    <p>
      This demo lets you preview the dropdown menu element with various
      configuration options.
    </p>
    <arc-interactive-demo
      .states="${demoStates}"
      @state-chanegd="${this._mainDemoStateHandler}"
      ?dark="${darkThemeActive}"
    >
      <div
        role="listbox"
        slot="content">
        <anypoint-item ?legacy="${demoLegacy}">
          Option 1
        </anypoint-item>
        <anypoint-item ?legacy="${demoLegacy}">
          Option 2
        </anypoint-item>
        <anypoint-item ?legacy="${demoLegacy}">
          Option 3
        </anypoint-item>
        <anypoint-item ?legacy="${demoLegacy}">
          <p>Paragraph as a child</p>
        </anypoint-item>
      </div>
    </arc-interactive-demo>
    </section>`;
  }

  _introductionTemplate() {
    return html`
      <section class="documentation-section">
        <h3>Introduction</h3>
        <p>
          This component is based on Material Design list item and adjusted for
          Anypoint platform components.
        </p>
        <p>
          Anypoint web components are set of components that allows to build
          Anypoint enabled UI in open source projects.
        </p>
        <p>
          A list item to be usind in menus and list views.
        </p>
      </section>
    `;
  }

  _twoLineDemoTemplate() {
    const {
      demoStates,
      darkThemeActive,
      demoLegacy
    } = this;
    return html`<section class="documentation-section">
    <h3>Two line list item</h3>
    <p>
      Two line item allows you to create a list with main and secondary
      information.
    </p>

    <p>
      The secondary label should have <code>secondary</code> attribute
    </p>
    <arc-interactive-demo
      .states="${demoStates}"
      @state-chanegd="${this._mainDemoStateHandler}"
      ?dark="${darkThemeActive}"
    >
      <div
        role="listbox"
        slot="content">
        <anypoint-item ?legacy="${demoLegacy}">
          <anypoint-item-body twoline ?legacy="${demoLegacy}">
            <div>Pawel Psztyc</div>
            <div secondary>Sr. Software Engineer</div>
          </anypoint-item-body>
        </anypoint-item>

        <anypoint-item ?legacy="${demoLegacy}">
          <anypoint-item-body twoline ?legacy="${demoLegacy}">
            <div>John Smith</div>
            <div secondary>QA specialist</div>
          </anypoint-item-body>
        </anypoint-item>

        <anypoint-item ?legacy="${demoLegacy}">
          <anypoint-item-body twoline ?legacy="${demoLegacy}">
            <div>John Q. Public</div>
            <div secondary>Interaction designer</div>
          </anypoint-item-body>
        </anypoint-item>
      </div>
    </arc-interactive-demo>
    </section>`;
  }

  _iconDemoTemplate() {
    const {
      demoStates,
      darkThemeActive,
      demoLegacy
    } = this;
    return html`<section class="documentation-section">
    <h3>Icon item</h3>
    <p>
      You can add a leading icon to the element.
    </p>
    <arc-interactive-demo
      .states="${demoStates}"
      @state-chanegd="${this._mainDemoStateHandler}"
      ?dark="${darkThemeActive}"
    >
      <div
        role="listbox"
        slot="content">
        <anypoint-icon-item ?legacy="${demoLegacy}">
          <iron-icon icon="anypoint:add" slot="item-icon"></iron-icon> Add
        </anypoint-icon-item>
        <anypoint-icon-item ?legacy="${demoLegacy}">
          <iron-icon icon="anypoint:refresh" slot="item-icon"></iron-icon> Refresh
        </anypoint-icon-item>
        <anypoint-icon-item ?legacy="${demoLegacy}">
          <span slot="item-icon" class="circle"></span> Refresh
        </anypoint-icon-item>
      </div>
    </arc-interactive-demo>
    </section>`;
  }

  contentTemplate() {
    return html`
    <h2>Anypoint item</h2>
    ${this._demoTemplate()}
    ${this._introductionTemplate()}
    ${this._twoLineDemoTemplate()}
    ${this._iconDemoTemplate()}`;
  }
}

const instance = new ComponentDemo();
instance.render();
window.demo = instance;
