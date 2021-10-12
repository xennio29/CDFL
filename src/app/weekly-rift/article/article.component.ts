import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/data-model/model/article';

@Component({
  selector: 'tlc-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  @Input() article: Article;

  constructor() {
  }

  ngOnInit(): void {
  }
}
