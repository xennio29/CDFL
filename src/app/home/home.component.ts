import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-model/data/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  belugasLogo = 'assets/logo-png/logo_esport_v3.png';

  tournamentName: string;

  constructor(private dataService: DataService) {

    this.dataService.getTournamentName().subscribe(result => {
      this.tournamentName = result;
    })
   }
}
