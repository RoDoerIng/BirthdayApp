import { Router } from '@angular/router';
import { BatteryService } from '../services/battery.service';
import { Directive } from '@angular/core';

@Directive()
export class BaseQuestion {

  constructor(private router: Router, public batteryService: BatteryService) { }

  public goToNextPageSetLevel(pageName: string, level: number = -999){
    if (level = -999) {
      level = this.batteryService.getBatteryLevel();
    }
    this.batteryService.setBatteryLevel(level)
    console.log('naviagting to: ' + pageName)
    this.router.navigateByUrl('/'+pageName);
  }

  public goToNextPageAddLevel(pageName: string, level: number = 0){
    this.batteryService.increaseBatteryLevel(level)
    console.log('naviagting to: ' + pageName)
    this.router.navigateByUrl('/'+pageName);
  }
}
