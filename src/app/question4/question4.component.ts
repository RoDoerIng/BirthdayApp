import { Component, OnInit } from '@angular/core';
import { BaseQuestion } from '../questions/base-question';

@Component({
  selector: 'app-question4',
  templateUrl: './question4.component.html',
  styleUrls: ['./question4.component.css']
})
export class Question4Component extends BaseQuestion implements OnInit {

  ngOnInit(): void {
  }

}
