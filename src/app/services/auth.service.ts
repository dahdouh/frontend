import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { CookieService } from 'ngx-cookie-service';
import { addUser, clearUser } from '../state/user.action';
import { selectUserdata } from '../state/user.selector';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isLoggedIn: boolean = false;
  public username: string | null = null;
  public userData: any | null = null;

  constructor(
    private _cookieService: CookieService,
    private _store: Store,
    private _router: Router,
    private _location: Location,
  ) {
    this._store.select(selectUserdata).subscribe((value: any) => {
      this.isLoggedIn = value.isLoggedIn;
      this.username = value.username;
      this.userData = value.data;
    });
  }

  setLoginData(data: any) {
    if (!data || !data.username) return;
    this._store.dispatch(
      addUser({ payload: { data, username: data.username, isLoggedIn: true } }),
    );

    localStorage.setItem('user-data-store', JSON.stringify({ payload: { data, username: data.username, isLoggedIn: true } }))
    this._router.navigateByUrl('/admin');
    this._location.replaceState('/admin');
  }

  public logout() {
    this.isLoggedIn = false;
    this.username = null;
    this._store.dispatch(clearUser());
    this._router.navigateByUrl('/');
    this._location.replaceState('/');
  }

  public checkLogin() {
    if (this.isLoggedIn) {
      this._router.navigateByUrl('/admin');
      this._location.replaceState('/admin');
    }
  }
}
