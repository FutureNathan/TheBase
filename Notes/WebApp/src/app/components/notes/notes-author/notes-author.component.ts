import { Component, OnInit } from '@angular/core';

import { NotesService } from '../notes.service';
import { TagsService } from '../../tags/tags.service';

@Component({
  selector: 'app-notes-author',
  templateUrl: './notes-author.component.html',
  styleUrls: ['./notes-author.component.scss']
})
export class NotesAuthorComponent implements OnInit {

  public expanded = false;
  public category = false;

  constructor(public notes: NotesService, public tags: TagsService) { }

  ngOnInit() { }

}
