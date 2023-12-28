import { Injectable } from '@angular/core';
import { texts } from '../assets/text';

@Injectable({
  providedIn: 'root',
})
export class InfoService {
  info: {}[] = texts;
  constructor() {}
  getInfo() {
    return this.info;
  }
  getNumberOfNotifications() {
    let number = 0;
    this.info.forEach((user, info) => {
      let obj = JSON.parse(JSON.stringify(user));
      if (obj.pending) number += 1;
    });
    return number;
  }
}
