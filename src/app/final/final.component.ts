import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cdfl-final',
  templateUrl: './final.component.html',
  styleUrls: ['./../circuit/circuit.component.scss']
})
export class FinalComponent implements OnInit {

  logo = 'assets/img/mtggones_logo.png';
  banniere = 'assets/img/CDFL-banniere.jpg';
  planning = 'assets/img/CDFL-planning.png';
  facebook = 'assets/img/facebook-logo-1-2.png';
  kai = 'assets/img/Kai.jpg';
  kevin = 'assets/img/kevin.jpg';
  ja = 'assets/img/ja.jpg';

  selectedVal: string;

  constructor() { }

  ngOnInit(): void {
  }

  public onValueChange(val: string) {
    this.selectedVal = val;
  }

}
