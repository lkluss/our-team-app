import { TeamProfileService } from './../../services/team-profile.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-team-main',
  templateUrl: './team-main.component.html',
  styleUrls: ['./team-main.component.less']
})
export class TeamMainComponent implements OnInit {

  public teams$: Observable<any>;

  constructor(private teamProfileService: TeamProfileService) { }

  ngOnInit(): void {   
    this.teams$ = this.teamProfileService.getAllTeams();
  }


}
