import { MemberBlockModel } from './../../models/MemberBlockModel';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-descriprion-box',
  templateUrl: './descriprion-box.component.html',
  styleUrls: ['./descriprion-box.component.less']
})
export class DescriprionBoxComponent implements OnInit {

  @Input() block:MemberBlockModel;
  
  constructor() { }

  ngOnInit(): void {
  }

}
