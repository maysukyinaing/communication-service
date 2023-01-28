import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NotificationsManagerComponent } from './notifications-manager/notifications-manager.component';
import { NotificationsButtonComponent } from './notifications-button/notifications-button.component';

@NgModule({
  declarations: [
    AppComponent,
    NotificationsManagerComponent,
    NotificationsButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
