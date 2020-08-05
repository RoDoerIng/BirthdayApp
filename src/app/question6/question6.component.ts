import { Component, OnInit } from '@angular/core';
import { BaseQuestion } from '../questions/base-question';

@Component({
  selector: 'app-question6',
  templateUrl: './question6.component.html',
  styleUrls: ['./question6.component.css']
})
export class Question6Component extends BaseQuestion implements OnInit {

  ngOnInit(): void {
  }

}
