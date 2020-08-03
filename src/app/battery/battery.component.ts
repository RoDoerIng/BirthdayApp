import { Component, OnInit } from '@angular/core';
import {BatteryService} from '../services/battery.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-battery',
  templateUrl: './battery.component.html',
  styleUrls: ['./battery.component.css']
})
export class BatteryComponent implements OnInit {

  getBatteryLevel(): number{
    return this.batteryService.getBatteryLevel();
  }

  constructor(public batteryService: BatteryService) {
  }

  ngOnInit(): void {
  }

}
