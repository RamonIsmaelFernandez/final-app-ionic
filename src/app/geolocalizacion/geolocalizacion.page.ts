import { Component } from '@angular/core';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-geolocalizacion',
  templateUrl: './geolocalizacion.page.html',
  styleUrls: ['./geolocalizacion.page.scss'],
})
export class GeolocalizacionPage {
  lat: number;
  lon: number;
  total: string;

  constructor(private geolocation: Geolocation) {
    this.getGeolocation();
  }

  getGeolocation() {
    this.geolocation.getCurrentPosition().then((geposition: Geoposition) => {
      this.lat = geposition.coords.latitude;
      this.lon = geposition.coords.longitude;

      let latitudMiTrabajo = -34.78316;
      let longitudMiTrabajo = -58.4743;

      this.total =
        this.calcularDistancias(
          this.lon,
          longitudMiTrabajo,
          this.lat,
          latitudMiTrabajo
        ) + " KILOMETROS";
    });
  }

  calcularDistancias(lon1, lon2, lat1, lat2) {
    let p = 0.017453292519943295;
    let c = Math.cos;
    let a =
      0.5 -
      c((lat1 - lat2) * p) / 2 +
      (c(lat2 * p) * c(lat1 * p) * (1 - c((lon1 - lon2) * p))) / 2;
    let dis = 12742 * Math.asin(Math.sqrt(a));
    return Math.trunc(dis);
  }
}
