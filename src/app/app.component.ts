import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NotificationComponent } from './notification/notification.component';
import { InfoService } from './info.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NotificationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  texts = this.infoService.getInfo();
  title = 'notificacions-page-main';
  notifications = this.infoService.getNumberOfNotifications();
  constructor(private infoService: InfoService) {}

  markAllAsRead() {
    let newInfo = this.texts.map((obj) => {
      let user = JSON.parse(JSON.stringify(obj));
      if (user.pending) {
        user.pending = false;
      }
      obj = user;
      return obj;
    });
    this.texts = newInfo;
    this.notifications = 0;
  }
}
