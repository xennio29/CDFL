import { Component, OnInit } from '@angular/core';
import { QuestionAnswer } from '../data-model/model/questionanswer';

@Component({
  selector: 'bf-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  questionsAndAnswers: QuestionAnswer[] = QuestionAnswer.allQA;

  constructor() { }

  ngOnInit(): void {
  }
}
