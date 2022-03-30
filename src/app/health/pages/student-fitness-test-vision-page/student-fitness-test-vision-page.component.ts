import { Component, ElementRef, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Pie, PieOptions } from '@antv/g2plot';
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
    this.findKindergartenStudentFitnessTestScoreShuttleRun10Vision();
    this.findKindergartenStudentFitnessTestScoreStandingLongJumpVision();
    this.findKindergartenStudentFitnessTestScoreBaseballThrowVision();
    this.findKindergartenStudentFitnessTestScoreBunnyHoppingVision();
    this.findKindergartenStudentFitnessTestScoreSitAndReachVision();
    this.findKindergartenStudentFitnessTestScoreBalanceBeamVision();
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
      // color: (n: any) => {
      //   if (n.name === '偏高') {
      //     return '#f44336';
      //   } else if (n.name === '偏低') {
      //     return '#8bc34a'
      //   }
      //   return '#2196f3';
      // },
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
}
