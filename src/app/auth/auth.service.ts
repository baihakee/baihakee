import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:3000/api/baihakis';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  createAccount( email): Promise <any> {
    return this.http.post(baseUrl, email).toPromise();
  }
}
