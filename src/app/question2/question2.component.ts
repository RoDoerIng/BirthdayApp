import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BatteryService } from '../services/battery.service';

@Component({
  selector: 'app-question2',
  templateUrl: './question2.component.html',
  styleUrls: ['./question2.component.css']
})
export class Question2Component implements OnInit {

  constructor(private router: Router, public batteryService: BatteryService) { }

  ngOnInit(): void {
  }

  goToQuestion3(){
    this.batteryService.decreaseBatteryLevel(30)
    this.router.navigateByUrl('/question3');
  }

}
