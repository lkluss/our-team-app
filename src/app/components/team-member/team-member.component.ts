import { MemberCard } from './../../models/MemberCard';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.less']
})
export class TeamMemberComponent implements OnInit {

  @Input() teamMember: MemberCard;
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.teamMember);
  }

}
