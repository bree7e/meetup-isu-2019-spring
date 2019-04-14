import { Injectable } from '@angular/core';

import { MeetUpEvent } from './meetup.interface';
import { meetupList } from './meetup';

@Injectable({
  providedIn: 'root'
})
export class MeetUpEventService {
  private _meetupsList: MeetUpEvent[] = meetupList;

  constructor() { }

  /**
   * Получить список мероприятий
   */
  getList(): MeetUpEvent[] {
    return this._meetupsList.slice();
  }

 /**
   * Получить мероприятие
   * @param id - номер мероприятия
   */
  get(id: number): MeetUpEvent {
    return this._meetupsList.find(m => m.id === id);
  }

  /**
   * Создать мероприятие
   */
  create(m: MeetUpEvent): void {
    this._meetupsList.push(m);
  }
}
