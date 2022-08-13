import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Liquid, LiquidOptions } from '@antv/g2plot';

@Component({
  selector: 'app-liquid',
  templateUrl: './liquid.component.html',
  styleUrls: ['./liquid.component.scss']
})
export class LiquidComponent implements OnInit, OnChanges {

  @Input() width: number = 400;
  @Input() height: number = 400;
  @Input() percent: number = 0;
  constructor(private el: ElementRef) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.render();
  }

  liquidPlot: Liquid | null = null;

  render() {
    const cfg: LiquidOptions = {
      width: this.width,
      height: this.height,
      percent: this.percent,
      outline: {
        border: 4,
        distance: 8,
      },
      wave: {
        length: 128,
      },
    };
    if (this.liquidPlot) {
      this.liquidPlot.update(cfg);
    } else {
      this.liquidPlot = new Liquid(this.el.nativeElement.querySelector('#container'), cfg);
    }
    this.liquidPlot.render();
  }
}
