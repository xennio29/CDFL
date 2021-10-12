import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-model/data/data.service';
import { Poule } from '../data-model/model/poule';

@Component({
  selector: 'tlc-poules',
  templateUrl: './poules.component.html',
  styleUrls: ['./poules.component.scss']
})
export class PoulesComponent {

  poules: Poule[] = [];

  constructor(private dataService: DataService) {
    this.dataService.getPoules().subscribe(result => this.poules = result);
  }
}
