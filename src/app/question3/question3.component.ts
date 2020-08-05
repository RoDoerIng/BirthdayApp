import { Component, OnInit } from '@angular/core';
import { BaseQuestion } from '../questions/base-question';

@Component({
  selector: 'app-question3',
  templateUrl: './question3.component.html',
  styleUrls: ['./question3.component.css']
})
export class Question3Component extends BaseQuestion implements OnInit {

  ngOnInit(): void {
  }
}
