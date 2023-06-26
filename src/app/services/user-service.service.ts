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
    Authorization: 'Bearer ' + localStorage.getItem('srstoken'),
  }),
};
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:7789/api/v1/user/'; // Replace with your API endpoint URL
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
  imageUpload(data: any) {
    return this.http.post<any>(this.apiUrl + 'upload', data);
  }
  updateUser(userID: string,userData:any): Observable<any> {
    return this.http.patch(this.apiUrl + userID, userData, httpOptions2);
  }
}
