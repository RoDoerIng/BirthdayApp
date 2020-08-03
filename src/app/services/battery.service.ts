import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BatteryService {

  private readonly MINIMUM_LEVEL: number = 0;
  private readonly MAXIMUM_LEVEL: number = 100;
  private static batteryLevel: number = 0;

  constructor() { }

  public getBatteryLevel(): number {
    return BatteryService.batteryLevel;
  }

  public decreaseBatteryLevel(amount: number): number {
    console.debug('entering decreaseBatteryLevel with level: ' + BatteryService.batteryLevel);
    var newBatteryLevel: number = this.roundToTen(BatteryService.batteryLevel - amount);

    if (newBatteryLevel < this.MINIMUM_LEVEL) return this.MINIMUM_LEVEL;
    BatteryService.batteryLevel = newBatteryLevel;

    console.debug('exiting decreaseBatteryLevel with level: ' + BatteryService.batteryLevel);
    return BatteryService.batteryLevel;
  }

  public increaseBatteryLevel(amount: number): number {
    console.debug('entering increaseBatteryLevel with level: ' + BatteryService.batteryLevel)
    var newBatteryLevel: number = this.roundToTen(BatteryService.batteryLevel + amount);

    if (newBatteryLevel > this.MAXIMUM_LEVEL) return this.MAXIMUM_LEVEL;
    BatteryService.batteryLevel = newBatteryLevel;

    console.debug('exiting increaseBatteryLevel with level: ' + BatteryService.batteryLevel)
    return BatteryService.batteryLevel;
  }

  private roundToTen(num: number):number{
    return Math.round(num / 10) * 10;
  }
}
