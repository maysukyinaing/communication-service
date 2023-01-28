import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  //To Note Last Value
  private count:BehaviorSubject<number> = new BehaviorSubject<number>(0)

  //Produce (Emission)
  count$: Observable<number> = this.count.asObservable()

  constructor() { }

  //Save last value from this setCount method and set to behaviour subject
  setCount(countVal:number) {
    this.count.next(countVal)
  }


}
