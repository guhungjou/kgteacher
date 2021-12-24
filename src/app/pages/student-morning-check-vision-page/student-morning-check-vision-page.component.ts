import { Component, ElementRef, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Pie, PieOptions } from '@antv/g2plot';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-student-morning-check-vision-page',
  templateUrl: './student-morning-check-vision-page.component.html',
  styleUrls: ['./student-morning-check-vision-page.component.scss']
})
export class StudentMorningCheckVisionPageComponent implements OnInit {

  loading = false;
  queryDate: null | Date = new Date();
  queryClassID = 0;

  constructor(private title: Title, private api: ApiService, private message: NzMessageService,
    private el: ElementRef) {
    this.title.setTitle('健康管理 - 晨检统计')
  }

  ngOnInit(): void {
    this.findStudentMorningCheckTemperatureVision();
  }

  search() {
    this.findStudentMorningCheckTemperatureVision();
  }

  async findStudentMorningCheckTemperatureVision() {
    if (!this.queryDate) {
      return;
    }
    try {
      this.loading = true;
      const r = await this.api.findStudentMorningCheckTemperatureVision(this.queryDate.toISOString(), this.queryClassID);
      const data = r.data;
      if (data.length === 0) {
        this.message.warning('所选日期没有任何晨检数据');
        if (this.temperaturePie) {
          this.temperaturePie.destroy();
          this.temperaturePie = null;
        }
      } else {
        let total = 0;
        for (const d of data) {
          if (d.status === 'high') {
            d.name = '偏高';
          } else if (d.status === 'low') {
            d.name = '偏低'
          } else {
            d.name = '正常'
          }
          total += d.count;
        }
        this.renderTemperature(data, total);
      }
    } catch (error) {
      this.message.error('网络错误');
    } finally {
      this.loading = false;
    }
  }


  temperaturePie: Pie | null = null;

  renderTemperature(data: any[], total: number) {
    const cfg: PieOptions = {
      appendPadding: 10,
      data,
      autoFit: true,
      angleField: 'count',
      colorField: 'name',
      color: (n: any) => {
        if (n.name === '偏高') {
          return '#f44336';
        } else if (n.name === '偏低') {
          return '#8bc34a'
        }
        return '#2196f3';
      },
      radius: 1,
      innerRadius: 0.5,
      label: {
        type: 'inner',
        offset: '-50%',
        content: '{name}',
        style: {
          textAlign: 'center',
          fontSize: 14,
        },
        autoRotate: false,
      },
      interactions: [{ type: 'element-selected' }, { type: 'element-active' }],
      statistic: {
        title: {
          content: '学生体温'
        },
        content: {
          style: {
            whiteSpace: 'pre-wrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            fontSize: '22px',
            fontWeight: 'normal',
            marginTop: '10px'
          },
          content: '总数 ' + total,
        },
      },
    };
    if (this.temperaturePie) {
      this.temperaturePie.update(cfg);
    } else {
      this.temperaturePie = new Pie(this.el.nativeElement.querySelector('#temperaturepie'), cfg);
    }

    this.temperaturePie.render();
  }
}
