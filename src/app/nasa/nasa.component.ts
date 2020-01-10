import { Component, OnInit } from '@angular/core';
import { Apod } from '../shared/model/apod';
import { NasaApiService } from "../shared/services/nasa-api.service";
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-nasa',
  templateUrl: './nasa.component.html',
  styleUrls: ['./nasa.component.css']
})
export class NasaComponent implements OnInit {

  apod: Apod ;
  error: string;
  errorDes: HttpErrorResponse;
  constructor(private apiNasa: NasaApiService) { }

  ngOnInit() {
    this.apiNasa.getApod()
      .subscribe((data: Apod) => {
        this.apod = data; 
      }, error => {
        this.error ="Error al conectar con el servidor.";
        this.errorDes = error;
      }
    )  
  }

}
