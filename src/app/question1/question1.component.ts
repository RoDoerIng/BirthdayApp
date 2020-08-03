import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BatteryService } from '../services/battery.service';

@Component({
  selector: 'app-question1',
  templateUrl: './question1.component.html',
  styleUrls: ['./question1.component.css']
})
export class Question1Component implements OnInit {

  constructor(private router: Router, public batteryService: BatteryService) { }

  ngOnInit(): void {
  }

  goToQuestion2(age: number){
    this.batteryService.setBatteryLevel(age)
    this.router.navigateByUrl('/question2');
  }
}
