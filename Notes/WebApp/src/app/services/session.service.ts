import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { environment as env } from '../../environments/environment';
import * as superagent from 'superagent';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  public active = false;

  public data = {
    _id: '',
    email: '',
  };

  constructor(private router: Router) { }

  public async get() {
    try {
      const payload = await superagent
        .get(`${env.api}/session`)
        .withCredentials();

      this.active = payload.body.active;
      this.data = payload.body.user;
    } catch (error) {
      console.log(error);
      this.router.navigateByUrl('/');
    }
  }

  public async logout() {
    try {
      const payload = await superagent
        .get(`${env.api}/session`)
        .withCredentials();

      this.active = false;
      this.data = {
        _id: '',
        email: '',
      };

      this.router.navigateByUrl('/');
    } catch (error) {
      console.log(error);
      this.router.navigateByUrl('/');
    }
  }

}
