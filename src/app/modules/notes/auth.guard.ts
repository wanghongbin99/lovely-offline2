import { AuthService } from './../core/auth.service';
import { Injectable } from '@angular/core';
import { CanLoad, Router, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(private auth: AuthService, private router: Router) {}

  canLoad(): Observable<boolean> {
    if (!this.auth.authenticated) {
      console.log('Guard note authenticating...');
      this.router.navigate(['/user']);
      return of(false);
    }
    console.log('Guard note in...');
    return of(true);
  }
}
