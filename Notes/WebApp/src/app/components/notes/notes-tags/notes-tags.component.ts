import { Component, OnInit } from '@angular/core';

import { NotesService } from '../notes.service';
import { TagsService } from '../../tags/tags.service';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-notes-tags',
  templateUrl: './notes-tags.component.html',
  styleUrls: ['./notes-tags.component.scss']
})
export class NotesTagsComponent implements OnInit {

  constructor(public notes: NotesService, public tags: TagsService) { }

  ngOnInit() {
    this.tags.get();
  }

  public selectTag(tag) {
    if (tag === this.notes.tag) {
      this.notes.tag = {
        _id: '',
        name: '',
        color: '',
      };
    } else {
      this.notes.tag = tag;
    }
    this.notes.get();
  }

}
