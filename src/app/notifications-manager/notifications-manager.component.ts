import {Component, OnInit} from '@angular/core';
import {count, first, last, Observable} from "rxjs";
import {NotificationsService} from "../service/notifications.service";

@Component({
  selector: 'app-notifications-manager',
  templateUrl: './notifications-manager.component.html',
  styleUrls: ['./notifications-manager.component.css']
})
export class NotificationsManagerComponent implements OnInit{

  notificationsCount$: Observable<number> = new Observable<number>()

  constructor(private notificationsService:NotificationsService) {
  }

  ngOnInit(): void {
    this.notificationsCount$ = this.notificationsService.count$
  }

  getCountValue(callback:any) {
    this.notificationsCount$?.pipe(first()).subscribe(callback)
  }

  addNotification() {
    this.getCountValue( (countValue:any) => {
      this.notificationsService.setCount(++countValue)
    })
  }

  removeNotification() {
    this.getCountValue((countValue:any)=>{
      if(countValue == 0){
        return
      }
      this.notificationsService.setCount(--countValue)
    })
  }

  resetNotification() {
    this.notificationsService.setCount(0);
  }


}
