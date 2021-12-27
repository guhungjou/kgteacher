import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Line, LineOptions } from '@antv/g2plot';

@Component({
  selector: 'app-student-health-line',
  templateUrl: './student-health-line.component.html',
  styleUrls: ['./student-health-line.component.scss']
})
export class StudentHealthLineComponent implements OnInit, OnChanges {
  @Input() data: any = [];
  @Input() yField = '';
  @Input() yText = ''
  @Input() xField = 'date';
  @Input() xText = '日期';
  @Input() yMin = 0;
  @Input() low = 'min';
  @Input() high = 'max';

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.update();
  }

  line: null | Line = null;
  update() {
    const cfg: LineOptions = {
      data: this.data,
      padding: 'auto',
      xField: this.xField,
      yField: this.yField,
      smooth: true,
      xAxis: {
        title: {
          text: '日期',
        },
      },
      yAxis: {
        title: {
          text: this.yText,
        },
        min: this.yMin,
      },
      annotations: [
        {
          type: 'regionFilter',
          start: ['min', this.high],
          end: ['max', 'max'],
          color: '#F4664A',
        },
        {
          type: 'regionFilter',
          start: ['min', '0'],
          end: ['max', this.low],
          color: '#F4664A',
        },
        {
          type: 'text',
          position: ['min', this.low],
          content: this.low,
          offsetY: -4,
          style: {
            textBaseline: 'bottom',
          },
        },
        {
          type: 'line',
          start: ['min', this.low],
          end: ['max', this.low],
          style: {
            stroke: '#F4664A',
            lineDash: [2, 2],
          },
        },
        {
          type: 'text',
          position: ['min', this.high],
          content: this.high,
          offsetY: -4,
          style: {
            textBaseline: 'bottom',
          },
        },
        {
          type: 'line',
          start: ['min', this.high],
          end: ['max', this.high],
          style: {
            stroke: '#F4664A',
            lineDash: [2, 2],
          },
        },
      ],
    };
    if (this.line) {
      this.line.update(cfg);
    } else {
      this.line = new Line(this.el.nativeElement.querySelector('#line'), cfg);
    }

    this.line.render();
  }

}
