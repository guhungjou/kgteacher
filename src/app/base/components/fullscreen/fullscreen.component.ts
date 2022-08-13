import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import screenfull from 'screenfull';

@Component({
  selector: 'app-fullscreen',
  templateUrl: './fullscreen.component.html',
  styleUrls: ['./fullscreen.component.scss']
})
export class FullscreenComponent implements OnInit {

  @ViewChild('content') content!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  isFullscreen() {
    return screenfull.isFullscreen;
  }

  fullscreen() {
    screenfull.toggle(this.content.nativeElement);
  }
}
