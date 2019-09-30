import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { SessionService } from '../../services/session.service';
import { environment as env } from '../../../environments/environment';
import * as superagent from 'superagent';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  public data = [];

  public tag = {
    _id: '',
    name: '',
    color: '',
  };

  public form = {
    tag: {
      _id: '',
      name: '',
      color: '',
    },
    text: '',
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
  }

  constructor(private router: Router, private session: SessionService) { }

  public resetForm() {
    this.form = {
      tag: {
        _id: '',
        name: '',
        color: '',
      },
      text: '',
    };
  }

  public async get() {
    this.state.get.loading = true;
    this.state.get.error = 0;
    this.state.get.message = '';
    try {
      const payload = await superagent
        .get(`${env.api}/note?tag=${this.tag._id}`)
        .withCredentials();
      this.data = payload.body.response;
    } catch (error) {
      this.state.form.error = -1;
      if (error.response) {
        this.state.get.message = error.response.body.message;
      } else {
        this.state.get.message = 'There was adding the note...';
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
        .post(`${env.api}/note`)
        .send(this.form)
        .withCredentials();

      this.resetForm();
      this.state.form.error = 1;
      this.state.form.message = 'Note added!';
      this.get();
    } catch (error) {
      this.state.form.error = -1;
      if (error.response) {
        this.state.form.message = error.response.body.message;
      } else {
        this.state.form.message = 'There was adding the note...';
      }
    }
    this.state.form.loading = false;
  }

}
