import { Component, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Column, ColumnOptions } from '@antv/g2plot';
import { fromEvent, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-g2-column',
  templateUrl: './g2-column.component.html',
  styleUrls: ['./g2-column.component.scss']
})
export class G2ColumnComponent implements OnInit, OnChanges, OnDestroy {

  @Input() title = '';
  @Input() data: any = [];

  columnPlot: Column | null = null;

  constructor(private el: ElementRef) {
    this.resizeObservable$ = fromEvent(window, 'resize')
    this.resizeSubscription$ = this.resizeObservable$.subscribe(evt => {
      console.log('event: ', evt)
      if (this.columnPlot) {
        this.columnPlot.destroy();
        this.columnPlot = null;
      }
      this.render();
    })
  }

  resizeObservable$: Observable<Event>
  resizeSubscription$: Subscription

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.resizeSubscription$.unsubscribe();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.render();
  }

  render() {
    console.log('render');
    const cfg: ColumnOptions = {
      appendPadding: 4,
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
      // meta: {
      //   name: {
      //     alias: '类别',
      //   },
      //   count: {
      //     alias: '人数',
      //   },
      // },
      yAxis: {
        // tickCount:1,
        tickInterval: 1,
      },
      label: {
        position: 'middle', // 'top', 'bottom', 'middle',
      },
      xAxis: {
        label: {
          autoHide: true,
          autoRotate: false,
        },
        title: {
          text: this.title,
          style: {
            fontSize: 18,
            fill: 'white'
          }
        }
      }
    };
    if (!this.columnPlot) {
      this.columnPlot = new Column(this.el.nativeElement.querySelector('#column'), cfg);
    } else {
      this.columnPlot.update(cfg);
    }
    this.columnPlot.render();
  }
}
