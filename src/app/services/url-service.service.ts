import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UrlServiceService {
  private apiUrl = 'https://shortify-7orn.onrender.com/api/v1/url/'; // Replace with your API endpoint URL
  constructor(private http: HttpClient) {}
  private getHttpOptions(): any {
    const token = localStorage.getItem('srstoken');
    const httpOptions = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        Authorization: 'Bearer ' + token,
      }),
    };
    return httpOptions;
  }
  shortenURL(userData: any): Observable<any> {
    return this.http.post(
      this.apiUrl + 'create',
      userData,
      this.getHttpOptions()
    );
  }
  getURL(userData: any): Observable<any> {
    return this.http.get(this.apiUrl + userData);
  }
  getUserUrl(userID: any): Observable<any> {
    return this.http.get(this.apiUrl + `${userID}/url`, this.getHttpOptions());
  }
  getUserQrCode(userID: any): Observable<any> {
    return this.http.get(
      this.apiUrl + `${userID}/qrcode`,
      this.getHttpOptions()
    );
  }
}
