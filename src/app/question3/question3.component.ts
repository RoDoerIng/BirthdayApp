import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BatteryService } from '../services/battery.service';

@Component({
  selector: 'app-question3',
  templateUrl: './question3.component.html',
  styleUrls: ['./question3.component.css']
})
export class Question3Component implements OnInit {

  constructor(private router: Router, public batteryService: BatteryService) { }

  ngOnInit(): void {
  }

  goToQuestion4(){
    this.batteryService.decreaseBatteryLevel(30)
    this.router.navigateByUrl('/question4');
  }
}
