import { html } from 'lit-html';
import { ArcDemoPage } from '@advanced-rest-client/arc-demo-helper/ArcDemoPage.js';
import '@polymer/iron-icon/iron-icon.js';
import '@anypoint-web-components/anypoint-icons/anypoint-icons.js';
import '@polymer/iron-icons/iron-icons.js';
import '@anypoint-web-components/anypoint-button/anypoint-icon-button.js';
import '../anypoint-item.js';
import '../anypoint-icon-item.js';
import '../anypoint-item-body.js';

class ComponentDemo extends ArcDemoPage {
  constructor() {
    super();
    this._componentName = 'anypoint-item';
  }

  contentTemplate() {
    return html`
    <div class="card">
      <h2>
        anypoint-item's role
      </h2>

      <p id="roleLabel">
        Anypoint-items are list elements, to be used in an anypoint-listbox or an element with <i>role="listbox"</i>
      </p>

      <div role="listbox" aria-labelledby="roleLabel">
        <anypoint-item>Option 1</anypoint-item>
        <anypoint-item>Option 2</anypoint-item>
        <anypoint-item>Option 3</anypoint-item>
        <anypoint-item>
          <p>Paragraph as a child</p>
        </anypoint-item>
      </div>
    </div>

    <div class="card">
      <h2>
        Styling
      </h2>

      <p id="styleLabel">
        They can be styled using custom properties
      </p>
      <div role="listbox" aria-labelledby="styleLabel">
        <anypoint-item class="my-theme">Option 1</anypoint-item>
        <anypoint-item class="my-theme">Option 2</anypoint-item>
        <anypoint-item class="my-theme">Option 3</anypoint-item>
      </div>
      <style>
        anypoint-item.my-theme {
          --anypoint-item-focused-color: #fff;
          --anypoint-item-focused-background-color: #FF9800;
          --anypoint-item-focused-font-weight: bold;
        }
      </style>
    </div>

    <div class="card">
      <h2>
        Leading elements
      </h2>

      <p id="iconLabel">
        Add an icon (or any other element) as a leading element by adding <i>slot="item-icon"</i> attribute
      </p>

      <div role="listbox" aria-labelledby="iconLabel">
        <anypoint-icon-item>
          <iron-icon icon="anypoint:add" slot="item-icon"></iron-icon> Add
        </anypoint-icon-item>
        <anypoint-icon-item>
          <iron-icon icon="anypoint:refresh" slot="item-icon"></iron-icon> Refresh
        </anypoint-icon-item>
        <anypoint-icon-item>
          <span slot="item-icon" class="circle-icon"></span> Refresh
        </anypoint-icon-item>
        <style>
        .circle-icon {
          width: 25px;
          height: 25px;
          background-color: red;
          border-radius: 50%;
        }
        </style>
      </div>
    </div>

    <div class="card">
      <h2>
        Two lines
      </h2>

      <p id="twoLineLabel">
        For two-line items, use a anypoint-item-body inside a anypoint-item or anypoint-icon-item
      </p>

      <div role="listbox" aria-labelledby="twoLineLabel">
        <anypoint-item>
          <anypoint-item-body two-line>
            <div>Profile Photo</div>
            <div secondary>Change your profile photo</div>
          </anypoint-item-body>
        </anypoint-item>

        <anypoint-icon-item>
          <iron-icon icon="anypoint:add" slot="item-icon">
          </iron-icon>
          <anypoint-item-body two-line>
            <div>(650) 555-1234</div>
            <div secondary>Mobile</div>
          </anypoint-item-body>
        </anypoint-icon-item>

        <anypoint-icon-item>
          <div class="avatar blue" slot="item-icon"></div>
          <anypoint-item-body two-line>
            <div>Alphonso Engelking</div>
            <div secondary>Change photo</div>
          </anypoint-item-body>
        </anypoint-icon-item>
      </div>
    </div>

    <div class="card">
      <h2>
        Combination
      </h2>

      <p id="complexLabel">
        Complex layouts are usually a combination of all these elements
      </p>

      <div role="listbox" aria-labelledby="complexLabel">
        <anypoint-icon-item>
          <div class="avatar blue" slot="item-icon"></div>
          <anypoint-item-body two-line>
            <div>Photos</div>
            <div secondary>Jan 9, 2014</div>
          </anypoint-item-body>
          <anypoint-icon-button title="Add to vavourites" noink>
            <button>
              <iron-icon icon="star" alt="favourite this!"></iron-icon>
            </button>
          </anypoint-icon-button>
        </anypoint-icon-item>

        <anypoint-icon-item>
          <div class="avatar" slot="item-icon"></div>
          <anypoint-item-body two-line>
            <div>Recipes</div>
            <div secondary>Jan 17, 2014</div>
          </anypoint-item-body>
          <anypoint-icon-button title="Add to vavourites" noink>
            <button>
              <iron-icon icon="star" alt="favourite this!"></iron-icon>
            </button>
          </anypoint-icon-button>
        </anypoint-icon-item>
      </div>
    </div>
    `;
  }
}
const instance = new ComponentDemo();
instance.render();
window.demo = instance;
