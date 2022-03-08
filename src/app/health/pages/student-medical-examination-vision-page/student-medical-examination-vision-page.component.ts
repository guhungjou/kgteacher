import { Component, ElementRef, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Column, ColumnOptions, Pie, PieOptions, Plot } from '@antv/g2plot';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ApiService } from 'src/app/services/api.service';
import { HealthApiService } from '../../health-api.service';

@Component({
  selector: 'app-student-medical-examination-vision-page',
  templateUrl: './student-medical-examination-vision-page.component.html',
  styleUrls: ['./student-medical-examination-vision-page.component.scss']
})
export class StudentMedicalExaminationVisionPageComponent implements OnInit {

  queryDate: null | Date = null;
  queryClassID = 0;
  heightLoading = false;

  constructor(private title: Title, private api: HealthApiService, private message: NzMessageService,
    private el: ElementRef) {
    this.title.setTitle('健康管理 - 体检统计');
  }



  ngOnInit(): void {
  }

  search() {
    this.findStudentMedicalExaminationHeightVision();
    this.findStudentMedicalExaminationWeightVision();
    this.findStudentMedicalExaminationBMIVision();
    this.findStudentMedicalExaminationHemoglobinVision();
    this.findStudentMedicalExaminationALTVision();
    this.findStudentMedicalExaminationSightVision();
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

  bmiloading = false;
  bmiPie: null | Pie = null;
  async findStudentMedicalExaminationBMIVision() {
    if (!this.queryDate) {
      return;
    }
    try {
      this.bmiloading = true;
      const r = await this.api.findStudentMedicalExaminationBMIVision(this.queryDate.toISOString(), this.queryClassID);
      const data = r.data;
      this.renderBMI(data);
    } catch (error) {
      this.message.error('网络错误');
    } finally {
      this.bmiloading = false;
    }
  }


  renderBMI(data: any[]) {
    this.bmiPie = this.renderPie(this.bmiPie, '#bmipie', 'BMI指数', data);
  }

  hemoglobinloading = false;
  hemoglobinPie: null | Pie = null;
  async findStudentMedicalExaminationHemoglobinVision() {
    if (!this.queryDate) {
      return;
    }
    try {
      this.hemoglobinloading = true;
      const r = await this.api.findStudentMedicalExaminationHemoglobinVision(this.queryDate.toISOString(), this.queryClassID);
      const data = r.data;
      this.renderHemoglobin(data);
    } catch (error) {
      this.message.error('网络错误');
    } finally {
      this.hemoglobinloading = false;
    }
  }

  renderHemoglobin(data: any[]) {
    this.hemoglobinPie = this.renderPie(this.hemoglobinPie, '#hemoglobinpie', '血红蛋白', data);
  }

  altloading = false;
  altPie: null | Pie = null;
  async findStudentMedicalExaminationALTVision() {
    if (!this.queryDate) {
      return;
    }
    try {
      this.altloading = true;
      const r = await this.api.findStudentMedicalExaminationALTVision(this.queryDate.toISOString(), this.queryClassID);
      const data = r.data;
      this.renderALT(data);
    } catch (error) {
      this.message.error('网络错误');
    } finally {
      this.altloading = false;
    }
  }

  renderALT(data: any[]) {
    this.altPie = this.renderPie(this.altPie, '#altpie', '谷丙转氨酶', data);
  }


  renderPie(pie: null | Pie, selector: string, title: string, data: any[]) {
    if (data.length === 0) {
      if (pie) {
        pie.destroy();
      }
      return null;
    }
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
        content: '{name} {value}',
        style: {
          textAlign: 'center',
          fontSize: 14,
        },
        autoRotate: false,
      },
      interactions: [{ type: 'element-selected' }, { type: 'element-active' }],
      statistic: {
        title: {
          content: title,
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
    if (pie) {
      pie.update(cfg);
    } else {
      pie = new Pie(this.el.nativeElement.querySelector(selector), cfg);
    }

    pie.render();
    return pie;
  }

  sightloading = false;
  sightPie: null | Pie = null;
  async findStudentMedicalExaminationSightVision() {
    if (!this.queryDate) {
      return;
    }
    try {
      this.altloading = true;
      const r = await this.api.findStudentMedicalExaminationSightVision(this.queryDate.toISOString(), this.queryClassID);
      const data = r.data;
      this.renderSight(data);
    } catch (error) {
      this.message.error('网络错误');
    } finally {
      this.altloading = false;
    }
  }

  renderSight(data: any[]) {
    if (data.length === 0) {
      if (this.sightPie) {
        this.sightPie.destroy();
        this.sightPie = null;
      }
      return;
    }
    let total = 0;
    for (const d of data) {
      if (d.lstatus === 'low' && d.rstatus === 'low') {
        d.name = '近视';
      } else if (d.lstatus === 'low' && d.rstatus !== 'low') {
        d.name = '左眼近视';
      } else if (d.lstatus !== 'low' && d.rstatus === 'low') {
        d.name = '右眼近视';
      } else {
        d.name = '正常'
      }
      total += d.count;
    }
    const cfg: PieOptions = {
      appendPadding: 10,
      data,
      autoFit: true,
      angleField: 'count',
      colorField: 'name',
      color: (n: any) => {
        if (n.name === '近视') {
          return '#f44336';
        } else if (n.name === '左眼近视') {
          return '#4CAF50';
        } else if (n.name === '右眼近视') {
          return '#FFC107';
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
      interactions: [{ type: 'element-selected' }, { type: 'element-active' }],
      statistic: {
        title: {
          content: '学生视力',
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
    if (this.sightPie) {
      this.sightPie.update(cfg);
    } else {
      this.sightPie = new Pie(this.el.nativeElement.querySelector('#sightpie'), cfg);
    }

    this.sightPie.render();
  }

}
