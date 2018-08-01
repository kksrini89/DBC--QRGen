import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QRCodeModule } from 'angularx-qrcode';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { AngularFireModule } from '../../node_modules/angularfire2';
import { AngularFirestoreModule } from '../../node_modules/angularfire2/firestore';

declare var google;

const firebaseConfig = {
  apiKey: 'AIzaSyBMOkQN6cd9fzlnj4LlK1GKQH-Yfip8Zfg',
  authDomain: 'design-by-contract-demo.firebaseapp.com',
  databaseURL: 'https://design-by-contract-demo.firebaseio.com',
  projectId: 'design-by-contract-demo',
  storageBucket: '',
  messagingSenderId: '610004631173'
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    QRCodeModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBMOkQN6cd9fzlnj4LlK1GKQH-Yfip8Zfg',
      libraries: ['places']
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
