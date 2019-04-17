import { Injectable } from '@angular/core';

import { MeetUpEvent } from './meetup.interface';
import { meetupList } from './meetup';

@Injectable({
  providedIn: 'root'
})
export class MeetupService {
  private _meetupList: MeetUpEvent[];

  constructor() {
    this._meetupList = meetupList;
   }

  /**
   * Получить список мероприятий
   */
  getList(): MeetUpEvent[] {
    return this._meetupList.slice();
  }

 /**
   * Получить мероприятие
   * @param id - номер мероприятия
   */
  get(id: number): MeetUpEvent {
    return this._meetupList.find(m => m.id === id);
  }

 /**
   * Удалить мероприятие
   * @param id - номер мероприятия
   */
  remove(id: number): void {
    this._meetupList = this._meetupList.filter(m => m.id !== id);
  }

  /**
   * Создать мероприятие
   */
  create(m: MeetUpEvent): void {
    this._meetupList.unshift(m);
  }
}
