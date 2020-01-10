import { Component, OnInit } from '@angular/core';
import { Apod } from '../shared/model/apod';
import { NasaApiService } from "../shared/services/nasa-api.service";

@Component({
  selector: 'app-nasa',
  templateUrl: './nasa.component.html',
  styleUrls: ['./nasa.component.css']
})
export class NasaComponent implements OnInit {

  apod: Apod ;
  constructor(private apiNasa: NasaApiService) { }

  ngOnInit() {
    this.apod = this.apiNasa.getApod();
  }

}
