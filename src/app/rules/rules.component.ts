import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-model/data/data.service';

@Component({
  selector: 'pr-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss']
})
export class RulesComponent implements OnInit {

  allRules: string = "";

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.getRules().subscribe(rules => {
      this.allRules = rules;
    });
  }
}
