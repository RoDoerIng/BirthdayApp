import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BatteryService } from '../services/battery.service';
import { BaseQuestion } from '../questions/base-question';

@Component({
  selector: 'app-question2',
  templateUrl: './question2.component.html',
  styleUrls: ['./question2.component.css']
})
export class Question2Component extends BaseQuestion implements OnInit {

  ngOnInit(): void {
  }
}
