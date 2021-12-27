import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Annotation, Line, LineOptions } from '@antv/g2plot';

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
  @Input() yMax: number | undefined = undefined;
  @Input() low: string | undefined = undefined;
  @Input() high: string | undefined = undefined;
  @Input() sField: string | undefined = undefined;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.update();
  }



  line: null | Line = null;
  update() {
    let annotations: Annotation[] = [];
    if (this.high) {
      annotations.push({
        type: 'regionFilter',
        start: ['min', this.high],
        end: ['max', 'max'],
        color: '#F4664A',
      });
      annotations.push({
        type: 'text',
        position: ['min', this.high],
        content: this.high,
        offsetY: -4,
        style: {
          textBaseline: 'bottom',
        },
      });
      annotations.push(
        {
          type: 'line',
          start: ['min', this.high],
          end: ['max', this.high],
          style: {
            stroke: '#F4664A',
            lineDash: [2, 2],
          },
        });
    }
    if (this.low) {
      annotations.push(
        {
          type: 'regionFilter',
          start: ['min', '0'],
          end: ['max', this.low],
          color: '#F4664A',
        });
      annotations.push(
        {
          type: 'text',
          position: ['min', this.low],
          content: this.low,
          offsetY: -4,
          style: {
            textBaseline: 'bottom',
          },
        });
      annotations.push(
        {
          type: 'line',
          start: ['min', this.low],
          end: ['max', this.low],
          style: {
            stroke: '#F4664A',
            lineDash: [2, 2],
          },
        });
    }
    const cfg: LineOptions = {
      data: this.data,
      padding: 'auto',
      xField: this.xField,
      yField: this.yField,
      seriesField: this.sField,
      smooth: true,
      xAxis: {
        title: {
          text: '日期',
        },
      },
      yAxis: {
        title: {
          text: this.yText,
          autoRotate: false,
        },
        min: this.yMin,
        max: this.yMax,
      },
      annotations: annotations,
    };
    if (this.line) {
      this.line.update(cfg);
    } else {
      this.line = new Line(this.el.nativeElement.querySelector('#line'), cfg);
    }

    this.line.render();
  }

}
