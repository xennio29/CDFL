import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService } from '../data-model/data/data.service';

@Component({
  selector: 'pr-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  whiteLogo = 'assets/img/white_logo.png';
  tournamentId: string;

  constructor(private dataService: DataService) { }

  @Output() public sidenavClose = new EventEmitter();


  ngOnInit(): void {
    this.dataService.getTournamentId().subscribe(result => {
      this.tournamentId = result;
    })
  }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }


}
