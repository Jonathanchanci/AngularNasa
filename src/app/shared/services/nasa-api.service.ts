import { Injectable } from '@angular/core';
import { Apod } from "../model/apod";

@Injectable({
  providedIn: 'root'
})
export class NasaApiService {

  private readonly DATA: Apod = {
    date: "2020-01-09",
    explanation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum ex id nibh aliquam feugiat. Pellentesque gravida nisl eu placerat dapibus. Aenean placerat felis ex, non finibus enim posuere nec. Integer quis ipsum et purus dignissim elementum. Nulla vestibulum efficitur velit ut scelerisque. Nulla id enim sit amet ante laoreet congue. Quisque orci neque, tristique et efficitur a, molestie et lacus. Suspendisse mollis bibendum metus, quis tempus arcu feugiat nec. Mauris molestie pretium mi, sit amet pulvinar est vulputate sed. Sed et varius dui. Quisque lobortis ligula est, sed venenatis est ultrices at. Donec maximus elit sed dui dictum, cursus dignissim lectus dictum. Donec placerat vestibulum arcu. Suspendisse id enim sit amet sapien pulvinar tempus ac eu mauris. Curabitur cursus arcu erat, eget fringilla ex fermentum aliquet.",
    hdurl:"https://concepto.de/wp-content/uploads/2019/07/galaxia-via-lactea-cielo-e1561947885670.jpg",
    media_type: "image",
    service_version: "v1",
    title: "Este es el titulo del post",
    url: "https://concepto.de/wp-content/uploads/2019/07/galaxia-via-lactea-cielo-e1561947885670.jpg"
  };

  constructor() { }

  getApod(): Apod {
    return this.DATA;
  }
}
