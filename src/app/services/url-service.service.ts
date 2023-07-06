import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    Accept: 'application/json',
    Authorization: 'Bearer ' + localStorage.getItem('srstoken'),
  }),
};
@Injectable({
  providedIn: 'root',
})
export class UrlServiceService {
<<<<<<< HEAD
  private apiUrl = 'https://scissors-backend.onrender.com/api/v1/url/'; // Replace with your API endpoint URL
  constructor(private http: HttpClient) {}
  shortenURL(userData: any): Observable<any> {
    return this.http.post(this.apiUrl + 'create', userData, httpOptions);
=======
  private apiUrl = 'http://localhost:7789/api/v1/url/'; // Replace with your API endpoint URL
  constructor(private http: HttpClient) {}
  shortenURL(userData: any): Observable<any> {
    return this.http.post(this.apiUrl + 'create', userData, httpOptions);
  }
  getURL(userData: any): Observable<any> {
    return this.http.get(this.apiUrl + userData);
  }
  getUserUrl(userID: any): Observable<any> {
    return this.http.get(this.apiUrl + `${userID}/url`, httpOptions);
  }
  getUserQrCode(userID: any): Observable<any> {
    return this.http.get(this.apiUrl + `${userID}/qrcode`, httpOptions);
>>>>>>> parent of 4895142 (Updated the frontend)
  }
}
