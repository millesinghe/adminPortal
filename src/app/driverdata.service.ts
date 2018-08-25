import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DriverdataService {

  constructor(private http: HttpClient) { }

  getDrivers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }
}
