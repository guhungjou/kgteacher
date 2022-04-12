import { Component, ElementRef, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Column, ColumnOptions, Pie, PieOptions } from '@antv/g2plot';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HealthApiService } from '../../health-api.service';

@Component({
  selector: 'app-student-fitness-test-vision-page',
  templateUrl: './student-fitness-test-vision-page.component.html',
  styleUrls: ['./student-fitness-test-vision-page.component.scss']
})
export class StudentFitnessTestVisionPageComponent implements OnInit {

  queryDate: null | Date = null;
  queryClassID = 0;

  constructor(private title: Title, private el: ElementRef,
    private api: HealthApiService, private message: NzMessageService) {
    this.title.setTitle('健康管理 - 体测统计');
  }

  ngOnInit(): void {
  }


  search() {
    this.findStudentFitnessTestHeightVision();
    this.findStudentFitnessTestWeightVision();
    this.findKindergartenStudentFitnessTestScoreShuttleRun10Vision();
    this.findKindergartenStudentFitnessTestScoreStandingLongJumpVision();
    this.findKindergartenStudentFitnessTestScoreBaseballThrowVision();
    this.findKindergartenStudentFitnessTestScoreBunnyHoppingVision();
    this.findKindergartenStudentFitnessTestScoreSitAndReachVision();
    this.findKindergartenStudentFitnessTestScoreBalanceBeamVision();
    this.findKindergartenStudentFitnessTestStatusVision();
  }

  shuttlerun10loading = false;
  shuttlerun10pie: null | Pie = null;
  standinglongjumploading = false;
  standinglongjumppie: null | Pie = null;
  baseballthrowloading = false;
  baseballthrowpie: null | Pie = null;

  renderPie(pie: null | Pie, selector: string, title: string, data: any[]) {
    if (data.length === 0) {
      if (pie) {
        pie.destroy();
      }
      return null;
    }
    let total = 0;
    for (const d of data) {
      d.score = d.score + '分';
      total += d.count;
    }
    const cfg: PieOptions = {
      appendPadding: 10,
      data,
      autoFit: true,
      angleField: 'count',
      colorField: 'score',
      radius: 1,
      innerRadius: 0.5,
      label: {
        type: 'inner',
        offset: '-50%',
        content: '{name} {value}人',
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

  renderShuttleRun10(data: any) {
    this.shuttlerun10pie = this.renderPie(this.shuttlerun10pie, '#shuttlerun10pie', '十米折返跑(秒)', data);
  }

  async findKindergartenStudentFitnessTestScoreShuttleRun10Vision() {
    if (!this.queryDate) {
      return;
    }
    try {
      this.shuttlerun10loading = true;
      const r = await this.api.findKindergartenStudentFitnessTestScoreShuttleRun10Vision(this.queryClassID, this.queryDate.toISOString());
      const data = r.data;
      this.renderShuttleRun10(data);
    } catch (error) {

    } finally {
      this.shuttlerun10loading = false;
    }
  }

  renderStandingLongJump(data: any) {
    this.standinglongjumppie = this.renderPie(this.standinglongjumppie, '#standinglongjumppie', '立定跳远(厘米)', data);
  }

  async findKindergartenStudentFitnessTestScoreStandingLongJumpVision() {
    if (!this.queryDate) {
      return;
    }
    try {
      this.standinglongjumploading = true;
      const r = await this.api.findKindergartenStudentFitnessTestScoreStandingLongJumpVision(this.queryClassID, this.queryDate.toISOString());
      const data = r.data;
      this.renderStandingLongJump(data);
    } catch (error) {

    } finally {
      this.standinglongjumploading = false;
    }
  }

  renderBaseballThrow(data: any) {
    this.baseballthrowpie = this.renderPie(this.baseballthrowpie, '#baseballthrowpie', '网球掷远(米)', data);
  }

  async findKindergartenStudentFitnessTestScoreBaseballThrowVision() {
    if (!this.queryDate) {
      return;
    }
    try {
      this.baseballthrowloading = true;
      const r = await this.api.findKindergartenStudentFitnessTestScoreBaseballThrowVision(this.queryClassID, this.queryDate.toISOString());
      const data = r.data;
      this.renderBaseballThrow(data);
    } catch (error) {

    } finally {
      this.baseballthrowloading = false;
    }
  }

  bunnyhoppingloading = false;
  bunnyhoppingpie: null | Pie = null;
  renderBunnyHopping(data: any) {
    this.bunnyhoppingpie = this.renderPie(this.bunnyhoppingpie, '#bunnyhoppingpie', '双脚连续跳(秒)', data);
  }

  async findKindergartenStudentFitnessTestScoreBunnyHoppingVision() {
    if (!this.queryDate) {
      return;
    }
    try {
      this.bunnyhoppingloading = true;
      const r = await this.api.findKindergartenStudentFitnessTestScoreBunnyHoppingVision(this.queryClassID, this.queryDate.toISOString());
      const data = r.data;
      this.renderBunnyHopping(data);
    } catch (error) {

    } finally {
      this.bunnyhoppingloading = false;
    }
  }

  sitandreachloading = false;
  sitandreachpie: null | Pie = null;
  renderSitAndReach(data: any) {
    this.sitandreachpie = this.renderPie(this.sitandreachpie, '#sitandreachpie', '坐位体前屈(厘米)', data);
  }

  async findKindergartenStudentFitnessTestScoreSitAndReachVision() {
    if (!this.queryDate) {
      return;
    }
    try {
      this.sitandreachloading = true;
      const r = await this.api.findKindergartenStudentFitnessTestScoreSitAndReachVision(this.queryClassID, this.queryDate.toISOString());
      const data = r.data;
      this.renderSitAndReach(data);
    } catch (error) {

    } finally {
      this.sitandreachloading = false;
    }
  }

  balancebeamloading = false;
  balancebeampie: null | Pie = null;
  renderBalanceBeam(data: any) {
    this.balancebeampie = this.renderPie(this.balancebeampie, '#balancebeampie', '走平衡木(秒)', data);
  }

  async findKindergartenStudentFitnessTestScoreBalanceBeamVision() {
    if (!this.queryDate) {
      return;
    }
    try {
      this.balancebeamloading = true;
      const r = await this.api.findKindergartenStudentFitnessTestScoreBalanceBeamVision(this.queryClassID, this.queryDate.toISOString());
      const data = r.data;
      this.renderBalanceBeam(data);
    } catch (error) {

    } finally {
      this.balancebeamloading = false;
    }
  }

  statuspie: null | Pie = null;
  renderStatus(data: any) {
    if (data.length === 0) {
      if (this.statuspie) {
        this.statuspie.destroy();
      }
      return;
    }
    let total = 0;
    for (const d of data) {
      if (d.status === 'okay') {
        d.status = '合格';
      } else if (d.status === 'excellent') {
        d.status = '优秀';
      } else if (d.status === 'fail') {
        d.status = '不合格';
      } else if (d.status === 'good') {
        d.status = '良好';
      }
      total += d.count;
    }
    const cfg: PieOptions = {
      appendPadding: 10,
      data,
      autoFit: true,
      angleField: 'count',
      colorField: 'status',
      radius: 1,
      innerRadius: 0.5,
      label: {
        type: 'inner',
        offset: '-50%',
        content: '{name} {value}人',
        style: {
          textAlign: 'center',
          fontSize: 14,
        },
        autoRotate: false,
      },
      interactions: [{ type: 'element-selected' }, { type: 'element-active' }],
      statistic: {
        title: {
          content: '总评',
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
    if (this.statuspie) {
      this.statuspie.update(cfg);
    } else {
      this.statuspie = new Pie(this.el.nativeElement.querySelector('#statuspie'), cfg);
    }

    this.statuspie.render();
  }

  async findKindergartenStudentFitnessTestStatusVision() {
    if (!this.queryDate) {
      return;
    }
    try {
      this.statusLoading = true;
      const r = await this.api.findKindergartenStudentFitnessTestStatusVision(this.queryClassID, this.queryDate.toISOString());
      const data = r.data;
      this.renderStatus(data);
    } catch (error) {

    } finally {
      this.statusLoading = false;
    }
  }

  heightColumn: null | Column = null;
  heightLoading = false;
  async findStudentFitnessTestHeightVision() {
    if (!this.queryDate || this.heightLoading) {
      return;
    }
    try {
      this.heightLoading = true;
      const r = await this.api.findStudentFitnessTestHeightVision(this.queryDate.toISOString(), this.queryClassID);
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
  async findStudentFitnessTestWeightVision() {
    if (!this.queryDate || this.weightLoading) {
      return;
    }
    try {
      this.weightLoading = true;
      const r = await this.api.findStudentFitnessTestWeightVision(this.queryDate.toISOString(), this.queryClassID);
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

  statusLoading = false;
}
