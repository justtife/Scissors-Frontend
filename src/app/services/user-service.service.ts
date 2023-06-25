import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({
    Accept: 'application/json',
  }),
};
const httpOptions2 = {
  headers: new HttpHeaders({
    Accept: 'application/json',
    Authorization: 'Bearer ' + localStorage.getItem('token'),
  }),
};
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'https://scissors-backend.onrender.com/api/v1/user/'; // Replace with your API endpoint URL
  private countryURL = 'https://restcountries.com/v3.1/all';
  constructor(private http: HttpClient) {}
  signUser(userData: any): Observable<any> {
    return this.http.post(this.apiUrl + 'signup', userData, httpOptions);
  }
  loginUser(userData: any): Observable<any> {
    return this.http.post(this.apiUrl + 'login', userData, httpOptions);
  }
  getUser(userID: string): Observable<any> {
    return this.http.get(this.apiUrl + userID, httpOptions2);
  }
  getAllCountries(): Observable<any> {
    return this.http.get(this.countryURL);
  }
}
