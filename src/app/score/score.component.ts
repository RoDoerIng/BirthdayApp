import { Component, OnInit } from '@angular/core';
import { BatteryService } from '../services/battery.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  constructor(private batteryService: BatteryService) { }

  ngOnInit(): void {
    this.batteryService.setBatteryLevel(30);
  }

  getBatteryLevel(): number{
    return this.batteryService.getBatteryLevel()
  }
}
