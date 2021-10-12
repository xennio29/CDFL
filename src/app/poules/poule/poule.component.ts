import { Component, Input, OnInit } from '@angular/core';
import { Poule } from 'src/app/data-model/model/poule';
import { Team } from 'src/app/data-model/model/team';

@Component({
  selector: 'tlc-poule',
  templateUrl: './poule.component.html',
  styleUrls: ['./poule.component.scss']
})
export class PouleComponent {

  @Input() poule: Poule;

  constructor() { }
}
