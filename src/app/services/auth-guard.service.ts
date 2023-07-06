import { Injectable } from '@angular/core';
import * as jwt from 'jsonwebtoken';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate{
  constructor(private router: Router) {}
  // private getTokenExpiration(token: string): Date | any {
  //   try {
  //     const decodedToken: any = jwt.decode(token);
  //     if (decodedToken && decodedToken.exp) {
  //       const expirationDate = new Date(decodedToken.exp * 1000);
  //       return expirationDate;
  //     } else {
  //       console.log('Invalid token structure or expiration not found');
  //     }
  //   } catch (error) {
  //     console.error('Error decoding token:', error);
  //   }
  // }
  // private isLoggedIn(): boolean {
  //   const token = localStorage.getItem('srstoken');
  //   if (!token) {
  //     return false; // No token found, user is not logged in
  //   }
  //   const tokenExpiration = this.getTokenExpiration(token);
  //   if (!tokenExpiration || tokenExpiration < new Date()) {
  //     return false; // Token is expired, user is not logged in
  //   }
  //   return true; // Token exists and is not expired, user is logged in
  // }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // Check if the user is logged in (e.g., by checking authentication status or token)
    const isLoggedIn =
      true; /* Add your logic to check if the user is logged in */

    if (isLoggedIn) {
      return true; // User is logged in, allow access to the child route
    } else {
      // User is not logged in, redirect to the login page
      return this.router.parseUrl('/login');
    }
  }
}
