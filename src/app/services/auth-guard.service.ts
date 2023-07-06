import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate{
  constructor(private router: Router) {}
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> parent of 4895142 (Updated the frontend)
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
<<<<<<< HEAD
    // Check if the user is logged in (e.g., by checking authentication status or token)
    const isLoggedIn =
      true; /* Add your logic to check if the user is logged in */

    if (isLoggedIn) {
      return true; // User is logged in, allow access to the child route
=======
    if (localStorage.getItem('srstoken')) {
      const userID = localStorage.getItem('userID');
      const date = localStorage.getItem('tokenExp')?.split(' ')[0];
      const getUserID = localStorage.getItem('tokenExp')?.split(' ')[1];
      let d = new Date();
      if (userID === getUserID && d < new Date(date as string)) {
        return true;
      } else {
        return this.router.parseUrl('/login');
      }
>>>>>>> parent of 4895142 (Updated the frontend)
    } else {
      // User is not logged in, redirect to the login page
      return this.router.parseUrl('/login');
=======
  helper = new JwtHelperService()
  isAuthenticated(): boolean {
    const token = localStorage.getItem('srstoken');
    return !this.helper.isTokenExpired(token);
  }
  canActivate(): boolean {
    if (!this.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
>>>>>>> parent of 25d56b6 (Updates)
    }
    return true;
  }
}
