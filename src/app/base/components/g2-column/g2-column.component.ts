import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Column, ColumnOptions } from '@antv/g2plot';

@Component({
  selector: 'app-g2-column',
  templateUrl: './g2-column.component.html',
  styleUrls: ['./g2-column.component.scss']
})
export class G2ColumnComponent implements OnInit, OnChanges {

  @Input() title = '';
  @Input() data: any = [];

  columnPolot: Column | null = null;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.render();
  }

  render() {
    const cfg: ColumnOptions = {
      data: this.data,
      xField: 'name',
      yField: 'count',
      autoFit: true,
      color: (n: any) => {
        if (n.name === '偏高') {
          return '#e91e63';
        } else if (n.name === '偏低') {
          return '#8bc34a'
        }
        return '#2196f3';
      },
      meta: {
        name: {
          alias: '类别',
        },
        count: {
          alias: '人数',
        },
      },
      yAxis: {
        // tickCount:1,
        tickInterval: 1,
      }
    };
    if (!this.columnPolot) {
      this.columnPolot = new Column(this.el.nativeElement.querySelector('#column'), cfg);
    } else {
      this.columnPolot.update(cfg);
    }
    this.columnPolot.render();
  }
}
