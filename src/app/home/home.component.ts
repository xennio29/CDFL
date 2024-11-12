import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  logo = 'assets/img/cdfl_logo_alpha.png';
  logoWebp = 'assets/img/cdfl_logo_alpha.webp';
  discordLogo = 'assets/img/discord_logo.png';
  discordLogoWebp = 'assets/img/discord_logo.webp';

  constructor() { }

  ngOnInit(): void {
  }

  goDiscord(){
    window.open("https://discord.gg/dCQWMJuzZt", "_blank");
  }
}
