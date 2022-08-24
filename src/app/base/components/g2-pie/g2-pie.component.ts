import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Pie, PieOptions } from '@antv/g2plot';

@Component({
  selector: 'app-g2-pie',
  templateUrl: './g2-pie.component.html',
  styleUrls: ['./g2-pie.component.scss']
})
export class G2PieComponent implements OnInit, OnChanges {

  @Input() data: any = null;
  @Input() title = '';
  temperaturePie: Pie | null = null;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.render();
  }

  render() {
    let total = 0;
    for (const d of this.data) {
      total += d.count;
    }

    const cfg: PieOptions = {
      appendPadding: 5,
      data: this.data,
      autoFit: true,
      angleField: 'count',
      colorField: 'name',
      color: (n: any) => {
        if (n.name === '偏高') {
          return '#e91e63';
        } else if (n.name === '偏低') {
          return '#8bc34a';
        } else if (n.name === '未检') {
          return '#D7C215';
        } else if (n.name === '异常') {
          return '#e91e63';
        }
        return '#2196f3';
      },
      radius: 1,
      innerRadius: 0.5,
      label: {
        type: 'inner',
        offset: '-50%',
        content: '{name} {value}',
        style: {
          textAlign: 'center',
          fontSize: 14,
        },
        autoRotate: false,
      },
      legend: false,
      // interactions: [{ type: 'element-selected' }, { type: 'element-active' }],
      statistic: {
        title: {
          content: this.title,
          style: {
            fontSize: '20px',
            color: 'white',
            zIndex: '9999',
          }
        },
        content: {
          style: {
            whiteSpace: 'pre-wrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            fontSize: '14px',
            fontWeight: 'normal',
            marginTop: '10px',
            color: '#90caf9'
          },
          content: `总数 ${total}`,
        },
      },
    };
    if (this.temperaturePie) {
      this.temperaturePie.update(cfg);
    } else {
      this.temperaturePie = new Pie(this.el.nativeElement.querySelector('#pie'), cfg);
    }

    this.temperaturePie.render();
  }
}
