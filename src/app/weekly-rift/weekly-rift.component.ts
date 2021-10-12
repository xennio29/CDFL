import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-model/data/data.service';
import { Article } from '../data-model/model/article';

@Component({
  selector: 'tlc-weekly-rift',
  templateUrl: './weekly-rift.component.html',
  styleUrls: ['./weekly-rift.component.scss']
})
export class WeeklyRiftComponent {

  articles: Article[] = [];

  constructor(private dataService: DataService) {
    this.dataService.getArticles().subscribe(result => this.articles = result);
  }
}
