import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from '../data-model/data/data.service';

@Component({
  selector: 'cdfl-qualified',
  templateUrl: './qualified.component.html',
  styleUrls: ['./qualified.component.scss']
})
export class QualifiedComponent implements OnInit, AfterViewInit {

  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['name', 'event'];
  dataSource: MatTableDataSource<PlayerWithEvent>;

  constructor(private dataService: DataService) {
    this.dataService.tournamentsEmitter.subscribe(tournaments => {
      const players: PlayerWithEvent[] = [];
      tournaments.forEach(tournament => {
        var qualifiedPlayers = tournament.qualifiedPlayers;
        qualifiedPlayers.forEach(qualifiedPlayer => {
          const playerWithEvent = {firstNameAndLastName: qualifiedPlayer.firstNameAndLastName, eventName: tournament.name + " - " + tournament.organiser};
          players.push(playerWithEvent);
        });
      });
      this.dataSource = new MatTableDataSource(players);
    });
    this.dataService.askData();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    // Init with a filter on first column
    const sortState: Sort = {
      active: 'name', 
      direction: 'asc'
    };
    this.sort.active = sortState.active;
    this.sort.direction = sortState.direction;
    this.sort.sortChange.emit(sortState);
  }

  public sortData(sort: Sort) {
    // customize sorter that exactly do what normal sorter do
    // But for no founded reason it doesn't work so we did this
    var data = this.dataSource.data;
    if (!sort.active || sort.direction === '') {
      return;
    }
    data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name': return this.compare(a.firstNameAndLastName, b.firstNameAndLastName, isAsc);
        case 'event': return this.compare(a.eventName, b.eventName, isAsc);
        default: return 0;
    }});
  }

  compare(a: number | string, b: number | string, isAsc: boolean): number {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

export interface PlayerWithEvent {
  firstNameAndLastName: string;
  eventName: string;
}
