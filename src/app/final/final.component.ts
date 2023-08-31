import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cdfl-final',
  templateUrl: './final.component.html',
  styleUrls: ['./../circuit/circuit.component.scss']
})
export class FinalComponent implements OnInit {

  logo = 'assets/img/mtggones_logo.png';

  constructor() { }

  ngOnInit(): void {
  }

}
