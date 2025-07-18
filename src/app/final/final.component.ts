import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cdfl-final',
  templateUrl: './final.component.html',
  styleUrls: ['./../circuit/circuit.component.scss']
})
export class FinalComponent implements OnInit {

  mcbLogo = 'assets/img/mcb_logo.png';
  mcbLogoWebp = 'assets/img/mcb_logo.webp';
  mcbAffiche = 'assets/img/mcbAffiche.jpg';

  selectedVal: string;

  constructor() { }

  ngOnInit(): void {
  }

  public onValueChange(val: string) {
    this.selectedVal = val;
  }

}
