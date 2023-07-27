import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  logo = 'assets/img/cdfl_logo.jpg';
  discordLogo = 'assets/img/discord_logo.png';

  constructor() { }

  ngOnInit(): void {
  }

  goDiscord(){
    window.open("plop", "_blank");
  }
}
