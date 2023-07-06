import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({
    Accept: 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'https://shortify-7orn.onrender.com/api/v1/user/'; // Replace with your API endpoint URL
  private countryURL = 'https://restcountries.com/v3.1/all';
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
  signUser(userData: any): Observable<any> {
    return this.http.post(this.apiUrl + 'signup', userData, httpOptions);
  }
  loginUser(userData: any): Observable<any> {
    return this.http.post(this.apiUrl + 'login', userData, httpOptions);
  }
  getUser(userID: string): Observable<any> {
    return this.http.get(this.apiUrl + userID, this.getHttpOptions());
  }
  getAllCountries(): Observable<any> {
    return this.http.get(this.countryURL);
  }
  imageUpload(data: any) {
    return this.http.post<any>(this.apiUrl + 'upload', data);
  }
  updateUser(userID: string, userData: any): Observable<any> {
    return this.http.patch(
      this.apiUrl + userID,
      userData,
      this.getHttpOptions()
    );
  }
  changeEmail(userData: any): Observable<any> {
    return this.http.patch(
      this.apiUrl + 'change-email',
      userData,
      this.getHttpOptions()
    );
  }
  logout(): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'logout', 'logout');
  }
}
