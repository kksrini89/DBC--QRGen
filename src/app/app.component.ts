import { Component, OnInit, AfterViewInit, NgZone, ViewChild } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';
import { AgmMap, MapsAPILoader } from '@agm/core';
import { DataService } from './data.service';
import {} from '@types/googlemaps';
declare var google: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  // @ViewChild(AgmMap) public agmMap: AgmMap;
  // Google maps - Start

  public latitude: Number = 9.939093;
  public longitude: Number = 78.121719;
  public zoom: Number = 12;

  // Google maps - End

  qrData = null;
  createdCode = null;

  customer: any = {
    name: '',
    location: {
      text: '',
      latitude: 9.939093,
      longitude: 78.121719
    }
  };

  // customerForm: FormGroup;

  constructor(
    private dataService: DataService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) {}

  async createCode() {
    const newCustomer: any = {
      name: this.customer.name,
      location: this.customer.location,
      indoor: 'positive',
      outdoor: 'positive',
      fridge: 'positive'
      // isMixyChecked: false,
      // isWellChecked: false
    };
    if (newCustomer.location.text === '' || newCustomer.location.text === undefined) {
      newCustomer.location.text = this.customer.location.text;
    }
    const customer = await this.dataService.addToDatabase(newCustomer);
    this.createdCode = JSON.stringify(customer);
    // let alertCtrl = this.alertCtrl.create({
    //   title: 'New Customer!',
    //   subTitle: 'Data is saved!',
    //   buttons: ['OK']
    // });
    // alertCtrl.present();
  }

  ngAfterViewInit() {
    /* this.zoom = 12;
    this.latitude = 9.939093;
    this.longitude = 78.121719;

    // set current position
    this.setCurrentPosition();
    this.agmMap.triggerResize();

    // load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      const nativeHomeInputBox = document
        .getElementById('location')
        .getElementsByTagName('input')[0];
      const autocomplete = new google.maps.places.Autocomplete(nativeHomeInputBox, {
        types: ['address']
      });
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          // get the place result
          const place: google.maps.places.PlaceResult = autocomplete.getPlace();

          // verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          // set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.customer.location.text = place.name;
          this.customer.location.latitude = this.latitude;
          this.customer.location.longitude = this.longitude;
          this.zoom = 12;
        });
      });
    }); */
  }

  private setCurrentPosition() {
    /*    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    } */
  }
}
