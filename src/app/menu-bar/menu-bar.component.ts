import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'bc-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {

  whiteLogo = 'assets/img/cdfl_logo_black.jpg';
  rootName = '';

  @Output() public sidenavToggle = new EventEmitter();

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {

    this.router.events.subscribe( event => {
      if (event instanceof NavigationEnd) {
        this.rootName = this.getMenuName(event.urlAfterRedirects);
      }
    });
  }

  getMenuName(path: string): string {
    switch (path) {
      case '/qualified':
        return 'Qualified Player';
      case '/events':
        return 'Past Events';
        case '/circuit':
          return 'Circuit Informations';
      case '/final':
        return 'Final Informations';
      case '/faq':
        return 'FAQ';
      case '/home':
        return 'Coupe De France Legacy';
    }
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }
}
