import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Datum, Line, LineOptions } from '@antv/g2plot';

@Component({
  selector: 'app-g2-line',
  templateUrl: './g2-line.component.html',
  styleUrls: ['./g2-line.component.scss']
})
export class G2LineComponent implements OnInit, OnChanges {

  @Input() data: any[] = [];
  @Input() xfield = '';
  @Input() yfield = '';
  @Input() ylabel = '';

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.render();
  }

  line: Line | null = null;
  render() {
    const cfg: LineOptions = {
      data: this.data,
      padding: 'auto',
      xField: this.xfield,
      yField: this.yfield,
      autoFit: true,
      yAxis: {
        title: {
          text: this.ylabel,
          // position: 'end',
          autoRotate: false,
        },
      },
      xAxis: {
        title: {
          text: '日期',
        }
      },
      tooltip: {
        formatter: (datum: Datum) => {
          return { name: this.ylabel, value: datum[this.yfield] };
        },
      }
    };
    if (!this.line) {
      this.line = new Line(this.el.nativeElement.querySelector('#line'), cfg);
    } else {
      this.line.update(cfg);
    }
    this.line.render();
  }

}
