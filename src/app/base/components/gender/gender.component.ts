import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.scss'],
})
export class GenderComponent implements OnInit {
  @Input() gender = '';

  constructor() {}

  ngOnInit(): void {}
}
