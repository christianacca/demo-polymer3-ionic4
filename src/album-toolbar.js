import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class ActionPicker extends PolymerElement {
  static get template() {
    return html`
    <style>
      ion-button {
        --background: #cc459b
      }
    </style>
    <ion-button on-click="openSheet">
      {{title}}
    </ion-button>
    <ion-action-sheet-controller id="actionSheet"></ion-action-sheet-controller>
`;
  }

  static get is() { return 'album-toolbar'; }

  static get properties() {
    return {
      title: {
        type: String,
        value: 'Open'
      }
    }
  }

  async openSheet() {
    await this.presentActionSheet();
  }

  async presentActionSheet() {
    const actionSheetController = this.$.actionSheet;
    await actionSheetController.componentOnReady();
  
    const actionSheet = await actionSheetController.create({
      header: "Albums",
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'arrow-dropright-circle',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
}

window.customElements.define(ActionPicker.is, ActionPicker);
