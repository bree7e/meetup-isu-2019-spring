import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lection3',
  templateUrl: './lection3.component.html',
  styleUrls: ['./lection3.component.scss']
})
export class Lection3Component implements OnInit {
  color = 'red';
  today: number = Date.now();

  constructor() { }

  ngOnInit() {
  }

}
