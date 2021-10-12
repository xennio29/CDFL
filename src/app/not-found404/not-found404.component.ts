import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pr-not-found404',
  templateUrl: './not-found404.component.html',
  styleUrls: ['./not-found404.component.scss']
})
export class NotFound404Component implements OnInit {

  scaryPinguinLogo = 'assets/img/LoLClient_TFT_Marquee_T2_NoText.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
