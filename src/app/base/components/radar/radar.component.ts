import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Radar, RadarOptions } from '@antv/g2plot';
import { max } from 'moment';

@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.scss']
})
export class RadarComponent implements OnInit, OnChanges {

  @Input() data: any = [];
  @Input() xField = 'name';
  @Input() yField = 'value';

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.render();
  }

  radar: Radar | null = null;
  render() {
    const cfg: RadarOptions = {
      data: this.data,
      xField: this.xField,
      yField: this.yField,
      meta: {
        value: {
          min: 0,
          nice: true,
          alias: '评分',
          max: 5,
        },
      },
      area: {},
    };
    if (this.radar === null) {
      this.radar = new Radar(this.el.nativeElement.querySelector('#container'), cfg);
    } else {
      this.radar.update(cfg);
    }
    this.radar.render();
  }
}
