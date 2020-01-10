import { Component, OnInit } from '@angular/core';
import { MarsImage } from '../shared/model/mars-image';
import { NasaApiService } from '../shared/services/nasa-api.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-mars',
  templateUrl: './mars.component.html',
  styleUrls: ['./mars.component.css']
})
export class MarsComponent implements OnInit {

  marsImages: MarsImage[];
  cameras: string[] = ['MAST','CHEMCAM','FHAZ','NAVCAM','MAHLI','MARDI','RHAZ'];
  currentCamera: string = "NAVCAM";
  error: string ;
  errorDes: HttpErrorResponse;
  
  constructor(private apiNasa: NasaApiService) { }

  ngOnInit() {
    this.refreshView(this.currentCamera);
  }

  onSelectCamera(camera: string){
    this.refreshView(camera);
  }

  private refreshView(camera: string){
    this.apiNasa.getMarsImages(camera)
    .subscribe( result => {
      this.marsImages = result.photos;
    },error =>{
      this.error = 'No se pudo conectar al servidor.';
      this.errorDes = error;
    });
  }


}
