import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'bc-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {

  whiteLogo = 'assets/img/cdfl_logo_alpha.png';
  whiteLogoWebp = 'assets/img/cdfl_logo_alpha.webp';
  rootName = '';

  @Output() public sidenavToggle = new EventEmitter();

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.rootName = this.getMenuName(event.urlAfterRedirects);
      }
    });
  }

  getMenuName(path: string): string {
    switch (path) {
      case '/qualified':
        return 'Joueurs Qualifiés';
      case '/events':
        return 'Tournois';
      case '/circuit':
        return 'Informations sur le Circuit';
      case '/addqualified':
        return 'Ajouter un qualifié';
      case '/final':
        return 'Informations sur la Finale';
      case '/faq':
        return 'FAQ';
      case '/home':
        return 'Accueil';
    }
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }
}
