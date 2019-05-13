import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class ColorChips extends PolymerElement {
  static get template() {
    return html`
    <style>
      ion-grid{
        --ion-grid-padding: 2px;
        --ion-grid-width: 320px
      }
      ion-chip[flame] { --background: #e45a33 }
      ion-chip[orange] { --background: #fa761e }
      ion-chip[infrared] { --background: #ef486e }
      ion-chip[male] { --background: #4488ff }
      ion-chip[female] { --background: #ff44aa }
    </style>
    <ion-grid>
      <ion-row>
        <ion-col size="auto"><ion-chip flame></ion-chip></ion-col>
        <ion-col size="auto"><ion-chip orange></ion-chip></ion-col>
        <ion-col size="auto"><ion-chip infrared></ion-chip></ion-col>
        <ion-col size="auto"><ion-chip male></ion-chip></ion-col>
        <ion-col size="auto"><ion-chip female></ion-chip></ion-col>
      </ion-row>
    </ion-grid>
`;
  }

  static get is() { return 'color-chips'; }
}

window.customElements.define(ColorChips.is, ColorChips);
