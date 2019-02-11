import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { SessionService } from '../../services/session.service';

import { environment as env } from '../../../environments/environment';
import * as superagent from 'superagent';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  public form = {
    oldPassword: '',
    password: '',
    confirmPassword: '',
  };

  public validation = {
    email: {
      loading: false,
      state: 0,
      message: '',
      timeout: null,
    },
  };

  public state = {
    form: {
      loading: false,
      error: 0,
      message: '',
    },
    password: {
      loading: false,
      error: 0,
      message: '',
    },
  };

  constructor(private router: Router, private session: SessionService) { }

  public resetForm() {
    this.form = {
      oldPassword: '',
      password: '',
      confirmPassword: '',
    };
    this.validation = {
      email: {
        loading: false,
        state: 0,
        message: '',
        timeout: null,
      },
    };
    this.state = {
      form: {
        loading: false,
        error: 0,
        message: '',
      },
      password: {
        loading: false,
        error: 0,
        message: '',
      },
    };
  }

  public async verifyEmail() {
    this.validation.email.loading = true;
    this.validation.email.state = 0;
    this.validation.email.message = '';
    clearTimeout(this.validation.email.timeout);
    this.validation.email.timeout = setTimeout(async () => {
      try {
        const payload = await superagent.get(`${env.api}/user/email?email=${this.session.data.email}`).withCredentials();
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

  public async update() {
    if (this.validation.email.state !== 1) { return; }
    this.state.form.loading = true;
    this.state.form.error = 0;
    this.state.form.message = '';
    try {
      const payload = await superagent
        .patch(`${env.api}/user`)
        .send(this.session.data)
        .withCredentials();

      this.resetForm();
      this.state.form.error = 1;
      this.state.form.message = 'Profile updated!';
    } catch (error) {
      this.state.form.error = -1;
      if (error.response) {
        this.state.form.message = error.response.body.message;
      } else {
        this.state.form.message = 'There was a problem registering...';
      }
    }
    this.state.form.loading = false;
  }

  public async updatePassword() {
    this.state.password.loading = true;
    this.state.password.error = 0;
    this.state.password.message = '';
    try {
      const payload = await superagent
        .patch(`${env.api}/user/password`)
        .send(this.form)
        .withCredentials();

      this.resetForm();
      this.state.password.error = 1;
      this.state.password.message = 'Profile password updated';
    } catch (error) {
      this.state.password.error = -1;
      if (error.response) {
        this.state.password.message = error.response.body.message;
      } else {
        this.state.password.message = 'There was a problem registering...';
      }
    }
    this.state.password.loading = false;
  }

}
