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
  private apiUrl = 'https://shortify-7orn.onrender.com/api/v1/url/'; // Replace with your API endpoint URL
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
  }
}
