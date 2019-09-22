import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';

import { NotesService } from '../notes.service';
import { TagsService } from '../../tags/tags.service';

@Component({
  selector: 'app-notes-content',
  templateUrl: './notes-content.component.html',
  styleUrls: ['./notes-content.component.scss']
})
export class NotesContentComponent implements OnInit {

  public moment = moment;

  constructor(public notes: NotesService, public tags: TagsService) { }

  ngOnInit() {
    this.notes.get();
  }

}
