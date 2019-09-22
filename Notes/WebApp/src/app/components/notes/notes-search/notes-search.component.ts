import { Component, OnInit } from '@angular/core';

import { TagsService } from '../../tags/tags.service';

@Component({
  selector: 'app-notes-search',
  templateUrl: './notes-search.component.html',
  styleUrls: ['./notes-search.component.scss']
})
export class NotesSearchComponent implements OnInit {

  constructor(public tags: TagsService) { }

  ngOnInit() {
    this.tags.get();
  }

}
