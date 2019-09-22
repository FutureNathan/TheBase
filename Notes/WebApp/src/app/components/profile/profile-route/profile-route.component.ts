import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../../services/session.service';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile-route',
  templateUrl: './profile-route.component.html',
  styleUrls: ['./profile-route.component.scss']
})
export class ProfileRouteComponent implements OnInit {

  constructor(public session: SessionService, public profile: ProfileService) { }

  ngOnInit() {
    this.session.get();
  }

}
