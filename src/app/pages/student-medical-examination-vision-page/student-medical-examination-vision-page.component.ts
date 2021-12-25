import { Component, ElementRef, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Column, ColumnOptions, Plot } from '@antv/g2plot';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-student-medical-examination-vision-page',
  templateUrl: './student-medical-examination-vision-page.component.html',
  styleUrls: ['./student-medical-examination-vision-page.component.scss']
})
export class StudentMedicalExaminationVisionPageComponent implements OnInit {

  queryDate: null | Date = null;
  queryClassID = 0;
  heightLoading = false;

  constructor(private title: Title, private api: ApiService, private message: NzMessageService,
    private el: ElementRef) {
    this.title.setTitle('健康管理 - 体检统计');
  }



  ngOnInit(): void {
    // this.findStudentMedicalExaminationHeightVision();
  }

  search() {
    this.findStudentMedicalExaminationHeightVision();
    this.findStudentMedicalExaminationWeightVision();
  }

  async findStudentMedicalExaminationHeightVision() {
    if (!this.queryDate || this.heightLoading) {
      return;
    }
    try {
      this.heightLoading = true;
      const r = await this.api.findStudentMedicalExaminationHeightVision(this.queryDate.toISOString(), this.queryClassID);
      const data = r.data;
      if (data.length === 0) {
        if (this.heightColumn) {
          this.heightColumn.destroy();
          this.heightColumn = null;
        }
      } else {
        let total = 0;
        for (const d of data) {
          d.name = (d.height * 10) + ' - ' + (d.height * 10 + 9);
          d.gender = d.gender == 'male' ? '男' : '女';
          total += d.count;
        }
        this.renderHeight(data, total);
      }
    } catch (error) {
      this.message.error('网络错误');
    } finally {
      this.heightLoading = false;
    }
  }

  heightColumn: null | Column = null;
  renderHeight(data: any, total: number) {
    const cfg: ColumnOptions = {
      data,
      xField: 'name',
      yField: 'count',
      seriesField: 'gender',
      isGroup: true,
      autoFit: true,
      columnStyle: {
        radius: [5, 5, 0, 0],
      },
      xAxis: {
        title: {
          text: '身高区间(cm)'
        },
      },
      yAxis: {
        title: {
          text: '人数',
          autoRotate: false,
        },
        tickInterval: 1,
      },
      legend: {
        title: {
          text: '学生身高 总数:' + total,
          style: {
            fontSize: 18,
          }
        }
      },
      label: {
        // 可手动配置 label 数据标签位置
        position: 'top', // 'top', 'bottom', 'middle'
        // 可配置附加的布局方法
        layout: [
          // 柱形图数据标签位置自动调整
          { type: 'interval-adjust-position' },
          // 数据标签防遮挡
          { type: 'interval-hide-overlap' },
          // 数据标签文颜色自动调整
          { type: 'adjust-color' },
        ],
      },
    };
    if (!this.heightColumn) {
      this.heightColumn = new Column(this.el.nativeElement.querySelector('#heightcolumn'), cfg);
    } else {
      this.heightColumn.update(cfg);
    }

    this.heightColumn.render();
  }

  weightLoading = false;
  weightColumn: null | Column = null;
  async findStudentMedicalExaminationWeightVision() {
    if (!this.queryDate || this.weightLoading) {
      return;
    }
    try {
      this.weightLoading = true;
      const r = await this.api.findStudentMedicalExaminationWeightVision(this.queryDate.toISOString(), this.queryClassID);
      const data = r.data;
      if (data.length === 0) {
        if (this.weightColumn) {
          this.weightColumn.destroy();
          this.weightColumn = null;
        }
      } else {
        let total = 0;
        for (const d of data) {
          d.name = (d.weight * 5) + ' - ' + (d.weight * 5 + 4);
          d.gender = d.gender == 'male' ? '男' : '女';
          total += d.count;
        }
        this.renderWeight(data, total);
      }
    } catch (error) {
      this.message.error('网络错误');
    } finally {
      this.weightLoading = false;
    }
  }

  renderWeight(data: any, total: number) {
    const cfg: ColumnOptions = {
      data,
      xField: 'name',
      yField: 'count',
      seriesField: 'gender',
      isGroup: true,
      autoFit: true,
      columnStyle: {
        radius: [5, 5, 0, 0],
      },
      xAxis: {
        title: {
          text: '体重区间(kg)'
        },
      },
      yAxis: {
        title: {
          text: '人数',
          autoRotate: false,
        },
        tickInterval: 1,
      },
      legend: {
        title: {
          text: '学生体重 总数:' + total,
          style: {
            fontSize: 18,
          }
        }
      },
      label: {
        // 可手动配置 label 数据标签位置
        position: 'top', // 'top', 'bottom', 'middle'
        // 可配置附加的布局方法
        layout: [
          // 柱形图数据标签位置自动调整
          { type: 'interval-adjust-position' },
          // 数据标签防遮挡
          { type: 'interval-hide-overlap' },
          // 数据标签文颜色自动调整
          { type: 'adjust-color' },
        ],
      },
    };
    if (!this.weightColumn) {
      this.weightColumn = new Column(this.el.nativeElement.querySelector('#weightcolumn'), cfg);
    } else {
      this.weightColumn.update(cfg);
    }

    this.weightColumn.render();
  }
}
