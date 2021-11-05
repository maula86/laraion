import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {

  // tslint:disable-next-line: variable-name
  API_url = 'http://localhost/sinau/public/api/';

  constructor() { }
}
