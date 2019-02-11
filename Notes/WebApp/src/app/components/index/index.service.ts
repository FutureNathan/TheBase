import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { SessionService } from '../../services/session.service';

import { environment as env } from '../../../environments/environment';
import * as superagent from 'superagent';

@Injectable({
  providedIn: 'root'
})
export class IndexService {

  public form = {
    email: '',
    password1: '',
    password2: '',
  };

  public validation = {
    email: {
      loading: false,
      state: 0,
      message: '',
      timeout: null,
    },
    password1: {
      loading: false,
      state: 0,
      message: '',
      timeout: null,
    },
    password2: {
      loading: false,
      state: 0,
      message: '',
      timeout: null,
    },
  };

  public state = {
    form: {
      loading: false,
      error: false,
      message: '',
    },
  };

  constructor(private router: Router, private session: SessionService) { }

  public resetForm() {
    this.form = {
      email: '',
      password1: '',
      password2: '',
    };
    this.validation = {
      email: {
        loading: false,
        state: 0,
        message: '',
        timeout: null,
      },
      password1: {
        loading: false,
        state: 0,
        message: '',
        timeout: null,
      },
      password2: {
        loading: false,
        state: 0,
        message: '',
        timeout: null,
      },
    };
    this.state = {
      form: {
        loading: false,
        error: false,
        message: '',
      },
    };
  }

  public async verifyEmail(tab) {
    this.validation.email.loading = true;
    this.validation.email.state = 0;
    this.validation.email.message = '';
    clearTimeout(this.validation.email.timeout);
    if (tab === 'register') {
      this.validation.email.timeout = setTimeout(async () => {
        try {
          const payload = await superagent.get(`${env.api}/user/email?email=${this.form.email}`).withCredentials();
          this.validation.email.state = 1;
          this.validation.email.message = 'This email is available';
        } catch (error) {
          this.validation.email.state = -1;
          if (error.response) {
            this.validation.email.message = error.response.body.message;
          } else {
            this.validation.email.message = 'This email is not available';
          }
        }
        this.validation.email.loading = false;
      }, 1000);
    }
  }

  public async register(tab) {
    this.state.form.loading = true;
    this.state.form.error = false;
    this.state.form.message = '';
    try {
      const payload = await superagent
        .post(`${env.api}/user/${tab}`)
        .send(this.form)
        .withCredentials();

      this.resetForm();
      this.session.get();
      this.router.navigateByUrl('/notes');
    } catch (error) {
      this.state.form.error = true;
      if (error.response) {
        this.state.form.message = error.response.body.message;
      } else {
        this.state.form.message = 'There was a problem registering...';
      }
    }
    this.state.form.loading = false;
  }

}
