import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-temperature-label',
  templateUrl: './temperature-label.component.html',
  styleUrls: ['./temperature-label.component.scss']
})
export class TemperatureLabelComponent implements OnInit {

  @Input() temperature = 0;
  @Input() status = '';

  constructor() { }

  ngOnInit(): void {
  }

}
