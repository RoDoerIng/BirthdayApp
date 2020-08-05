import { Component, OnInit } from '@angular/core';
import { BaseQuestion } from '../questions/base-question';

@Component({
  selector: 'app-question1',
  templateUrl: './question1.component.html',
  styleUrls: ['./question1.component.css']
})
export class Question1Component extends BaseQuestion implements OnInit {

  ngOnInit(): void {
    this.batteryService.setBatteryLevel(100)
  }
}
