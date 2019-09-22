import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { SessionService } from '../../services/session.service';

import { environment as env } from '../../../environments/environment';
import * as superagent from 'superagent';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  public data = [];

  public form = {
    name: '',
    color: 'c0',
  };

  public state = {
    get: {
      loading: false,
      error: 0,
      message: '',
    },
    form: {
      loading: false,
      error: 0,
      message: '',
    },
  };

  constructor(private router: Router, private session: SessionService) { }

  public resetForm() {
    this.form = {
      name: '',
      color: 'c0',
    };
    this.state = {
      get: {
        loading: false,
        error: 0,
        message: '',
      },
      form: {
        loading: false,
        error: 0,
        message: '',
      },
    };
  }

  public async get() {
    this.state.get.loading = true;
    this.state.get.error = 0;
    this.state.get.message = '';
    try {
      const payload = await superagent
        .get(`${env.api}/tag`)
        .withCredentials();

      this.data = payload.body.response;

      this.state.get.error = 1;
      this.state.get.message = '';
    } catch (error) {
      this.state.get.error = -1;
      if (error.response) {
        this.state.get.message = error.response.body.message;
      } else {
        this.state.get.message = 'There was a problem getting tags...';
      }
    }
    this.state.get.loading = false;
  }

  public async submit() {
    this.state.form.loading = true;
    this.state.form.error = 0;
    this.state.form.message = '';
    try {
      const payload = await superagent
        .post(`${env.api}/tag`)
        .send(this.form)
        .withCredentials();

      this.resetForm();
      this.state.form.error = 1;
      this.state.form.message = 'Tag created!';
      this.get();
    } catch (error) {
      this.state.form.error = -1;
      if (error.response) {
        this.state.form.message = error.response.body.message;
      } else {
        this.state.form.message = 'There was a problem submitting tags...';
      }
    }
    this.state.form.loading = false;
  }

  public async remove(tag) {
    this.state.form.loading = true;
    this.state.form.error = 0;
    this.state.form.message = '';
    try {
      const payload = await superagent
        .delete(`${env.api}/tag/${tag._id}`)
        .withCredentials();

      this.resetForm();
      this.get();
    } catch (error) {
      this.state.form.error = -1;
      if (error.response) {
        this.state.form.message = error.response.body.message;
      } else {
        this.state.form.message = 'There was a problem submitting tags...';
      }
    }
    this.state.form.loading = false;
  }

}
