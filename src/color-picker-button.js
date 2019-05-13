import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './color-chips.js';

class ColorPickerButton extends PolymerElement {
  static get template() {
    return html`
    <ion-button on-click="presentPopover">
      Open
    </ion-button>
    <ion-popover-controller id="popoverCtrl"></ion-popover-controller>
    <color-chips id="colors" style$="[[__computeDisplay(isOpen)]]"></color-chips>
`;
  }

  constructor() {
    super();
  }

  static get is() { return 'color-picker-button'; }

  static get properties() {
    return {
      isOpen: {
        type: Boolean,
        value: false,
        readOnly: true
      }
    }
  }


  async presentPopover(evt) {
    await this.$.popoverCtrl.componentOnReady();
  
    const popover = await this.$.popoverCtrl.create({
      component: this.$.colors,
      // event: evt,
      translucent: true
    });

    popover.onDidDismiss().then(() => {
      this._setIsOpen(false);
    });

    return await popover.present().then(() => {
      this._setIsOpen(true);
    });
  }

  __computeDisplay(open) {
    return open ? 'display: block;' : 'display: none'
  }
}

window.customElements.define(ColorPickerButton.is, ColorPickerButton);
