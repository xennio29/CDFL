import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { DataService } from '../data-model/data/data.service';

@Component({
  selector: 'pr-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {

  logo = 'assets/logo-png/logo_esport_v3.png';
  rootName = '';

  @Output() public sidenavToggle = new EventEmitter();

  tournamentName: string;
  tournamentId: string;

  constructor(private dataService: DataService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {

    this.dataService.getTournamentName().subscribe(result => {
      this.tournamentName = result;
    })

    this.dataService.getTournamentId().subscribe(result => {
      this.tournamentId = result;
    })

    this.router.events.subscribe( event => {
      if (event instanceof NavigationEnd) {
        this.rootName = this.getMenuName(event.urlAfterRedirects);
      }
    });
  }

  // To update
  getMenuName(path: string): string {
    switch (path) {
      case '/home':
        return 'Home';
      case '/teams':
        return 'Teams';
      case '/poules':
        return 'Poules';
      case '/rules':
        return 'Réglement';
        case '/planning':
        return 'Planning';
      case '/weekly-rift':
        return 'TLC News';
    }

  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

}
