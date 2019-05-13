import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class ColorList extends PolymerElement {
  static get template() {
    return html`
    <style>
      ion-thumbnail {
        --size: 25px
      }
    </style>
    <ion-list>
      <ion-item>
        <ion-thumbnail slot="start">
          <ion-img src="https://via.placeholder.com/200x200/3880ff/fff?text=DEV7">
          </ion-img>
        </ion-thumbnail>
        <ion-label>Item color="primary"</ion-label>
      </ion-item>

      <ion-item>
        <ion-thumbnail slot="start">
          <ion-img src="https://via.placeholder.com/200x200/0cd1e8/fff?text=DEV7">
          </ion-img>
        </ion-thumbnail>
        <ion-label>Item color="secondary"</ion-label>
      </ion-item>

      <ion-item>
        <ion-thumbnail slot="start">
          <ion-img src="https://via.placeholder.com/200x200/7044ff/fff?text=DEV7">
          </ion-img>
        </ion-thumbnail>
        <ion-label>Item color="tertiary"</ion-label>
      </ion-item>

      <ion-item>
        <ion-thumbnail slot="start">
          <ion-img src="https://via.placeholder.com/200x200/10dc60/fff?text=DEV7">
          </ion-img>
        </ion-thumbnail>
        <ion-label>Item color="success"</ion-label>
      </ion-item>

      <ion-item>
        <ion-thumbnail slot="start">
          <ion-img src="https://via.placeholder.com/200x200/ffce00/fff?text=DEV7">
          </ion-img>
        </ion-thumbnail>
        <ion-label>Item color="warning"</ion-label>
      </ion-item>

      <ion-item>
        <ion-thumbnail slot="start">
          <ion-img src="https://via.placeholder.com/200x200/f04141/fff?text=DEV7">
          </ion-img>
        </ion-thumbnail>
        <ion-label>Item color="danger"</ion-label>
      </ion-item>

      <ion-item>
        <ion-thumbnail slot="start">
          <ion-img src="https://via.placeholder.com/200x200/222428/fff?text=DEV7">
          </ion-img>
        </ion-thumbnail>
        <ion-label>Item color="dark"</ion-label>
      </ion-item>

      <ion-item>
        <ion-thumbnail slot="start">
          <ion-img src="https://via.placeholder.com/200x200/989aa2/fff?text=DEV7">
          </ion-img>
        </ion-thumbnail>
        <ion-label>Item color="medium"</ion-label>
      </ion-item>

      <ion-item>
        <ion-thumbnail slot="start">
          <ion-img src="https://via.placeholder.com/200x200/f4f5f8/000?text=DEV7">
          </ion-img>
        </ion-thumbnail>
        <ion-label>Item color="light"</ion-label>
      </ion-item>

    </ion-list>
`;
  }

  static get is() { return 'color-list'; }
}

window.customElements.define(ColorList.is, ColorList);
