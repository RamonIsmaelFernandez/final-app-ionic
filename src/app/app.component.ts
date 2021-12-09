import { Component } from '@angular/core';
import { Camera } from '@ionic-native/camera/ngx';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  image:any;

  constructor(public camera: Camera) {}

  sacarCamara(){

    this.camera.getPicture({
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.CAMERA,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: false,
      encodingType: this.camera.EncodingType.JPEG,
      targetHeight:1024,
      targetWidth:1024,
      correctOrientation: true,
      saveToPhotoAlbum: true
    }).then(resultado => {
        this.image = "data: image/jpeg;base64," + resultado;
    }).catch(error => {
      console.log(error);
    })

  }

  tomarDeGaleria(){

    this.camera.getPicture({
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: false,
      encodingType: this.camera.EncodingType.JPEG,
      targetHeight:1024,
      targetWidth:1024,
      correctOrientation: true,
      saveToPhotoAlbum: true
    }).then(resultado => {
        this.image = "data: image/jpeg;base64," + resultado;
    }).catch(error => {
      console.log(error);
    })

  }


}
