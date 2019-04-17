import { Component } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { MeetupService } from '../meetup.service';

@Component({
  selector: 'app-create-meetup',
  templateUrl: './create-meetup.component.html',
  styleUrls: ['./create-meetup.component.scss']
})
export class CreateMeetupComponent {
  createForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    from_date: new FormControl('', Validators.required),
    published: new FormControl(false),
  });

  get vasya() { return this.createForm.get('name'); }

  constructor(private _meetupService: MeetupService) { }

  /**
   * Метод обрабатывающий введенные данные в форму
   * @param form - форма
   */
  submitForm(form: NgForm) {
    const meetup = form.value;
    meetup.id = ++this._meetupService.getList().length;
    this._meetupService.create(meetup);
  }
}
