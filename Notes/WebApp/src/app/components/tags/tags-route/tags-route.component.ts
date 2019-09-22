import { Component, OnInit } from '@angular/core';

import { SessionService } from '../../../services/session.service';
import { TagsService } from '../tags.service';

@Component({
  selector: 'app-tags-route',
  templateUrl: './tags-route.component.html',
  styleUrls: ['./tags-route.component.scss']
})
export class TagsRouteComponent implements OnInit {

  public select = false;

  constructor(public session: SessionService, public tags: TagsService) { }

  ngOnInit() {
    this.tags.get();
  }

}
