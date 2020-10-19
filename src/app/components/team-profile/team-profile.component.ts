import { MemberCardModel } from './../../models/MemberCardModel';
import { TeamProfileService } from './../../services/team-profile.service';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-team-profile',
  templateUrl: './team-profile.component.html',
  styleUrls: ['./team-profile.component.less']
})
export class TeamProfileComponent implements OnInit {

  @Input() teamId: number;

  public teamName$: Observable<any>;  
  public memberCards$: Observable<Array<MemberCardModel>>;

  constructor(private teamProfileService: TeamProfileService) { }

  ngOnInit(): void {   
    this.getTeamDetails();
  }

  getTeamDetails(){
    const teamDetails$ = this.teamProfileService.getTeamDetails(this.teamId);
    
    this.teamName$ = teamDetails$.pipe(map(details => details.attributes.title));
    this.memberCards$ = teamDetails$.pipe(map(details => details.attributes.memberCards));
  }
  
}
