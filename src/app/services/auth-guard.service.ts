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
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
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
    } else {
      // User is not logged in, redirect to the login page
      return this.router.parseUrl('/login');
    }
  }
}
