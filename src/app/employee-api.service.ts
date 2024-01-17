import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeApiService {

  private url="http://127.0.0.1:4400/getusers"

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get(`${this.url}/data`);
  }
}
