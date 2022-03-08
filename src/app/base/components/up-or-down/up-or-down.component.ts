import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-up-or-down',
  templateUrl: './up-or-down.component.html',
  styleUrls: ['./up-or-down.component.scss']
})
export class UpOrDownComponent implements OnInit {

  @Input() status = '';

  constructor() { }

  ngOnInit(): void {
  }

}
