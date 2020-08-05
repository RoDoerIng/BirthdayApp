import { Component, OnInit } from '@angular/core';
import { BaseQuestion } from '../questions/base-question';

@Component({
  selector: 'app-question5',
  templateUrl: './question5.component.html',
  styleUrls: ['./question5.component.css']
})
export class Question5Component extends BaseQuestion implements OnInit {

  ngOnInit(): void {
  }

}
