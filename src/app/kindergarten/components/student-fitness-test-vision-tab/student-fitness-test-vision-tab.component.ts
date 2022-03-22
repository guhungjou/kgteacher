import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HealthApiService } from 'src/app/health/health-api.service';

@Component({
  selector: 'app-student-fitness-test-vision-tab',
  templateUrl: './student-fitness-test-vision-tab.component.html',
  styleUrls: ['./student-fitness-test-vision-tab.component.scss']
})
export class StudentFitnessTestVisionTabComponent implements OnInit, OnChanges {

  @Input() studentID = 0;
  loading = false;
  constructor(private api: HealthApiService, private message: NzMessageService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.findStudentFitnessTests();
  }

  async findStudentFitnessTests() {
    if (!this.studentID) {
      return;
    }
    try {
      this.loading = true;
      const r = await this.api.findStudentFitnessTests(
        '',
        0,
        this.studentID,
        null,
        null,
        [], [], [], [], [], [],
        1,
        50,
      );
      const list = r.data.list.reverse();
      for (const o of list) {
        const d = new Date(o.date);
        o.date = `${d.getUTCFullYear()}/${d.getUTCMonth()}/${d.getUTCDate()}`;
      }
      this.updateShuttleRun10(list);
      this.updateStandingLongJump(list);
      this.updateBaseballThrow(list);
      this.updateBunnyHopping(list);
      this.updateSitAndReach(list);
      this.updateBalanceBeam(list);
    } catch (error) {
      this.message.error('网络错误');
    } finally {
      this.loading = false;
    }
  }

  shuttleRun10Data: any[] = [];
  updateShuttleRun10(data: any) {
    this.shuttleRun10Data = [];
    for (const d of data) {
      const dt = new Date(d.shuttle_run_10_updated_at);
      if (dt.getTime() > 0) {
        this.shuttleRun10Data.push(Object.assign({}, d));
      }
    }
  }

  standingLongJumpData: any[] = [];
  updateStandingLongJump(data: any) {
    this.standingLongJumpData = [];
    for (const d of data) {
      const dt = new Date(d.standing_long_jump_updated_at);
      if (dt.getTime() > 0) {
        this.standingLongJumpData.push(Object.assign({}, d));
      }
    }
  }

  baseballThrowData: any[] = [];
  updateBaseballThrow(data: any) {
    this.baseballThrowData = [];
    for (const d of data) {
      const dt = new Date(d.baseball_throw_updated_at);
      if (dt.getTime() > 0) {
        this.baseballThrowData.push(Object.assign({}, d));
      }
    }
  }

  bunnyHoppingData: any[] = [];
  updateBunnyHopping(data: any) {
    this.bunnyHoppingData = [];
    for (const d of data) {
      const dt = new Date(d.bunny_hopping_updated_at);
      if (dt.getTime() > 0) {
        this.bunnyHoppingData.push(Object.assign({}, d));
      }
    }
  }

  sitAndReachData: any[] = [];
  updateSitAndReach(data: any) {
    this.sitAndReachData = [];
    for (const d of data) {
      const dt = new Date(d.sit_and_reach_updated_at);
      if (dt.getTime() > 0) {
        this.sitAndReachData.push(Object.assign({}, d));
      }
    }
  }

  balanceBeamData: any[] = [];
  updateBalanceBeam(data: any) {
    this.balanceBeamData = [];
    for (const d of data) {
      const dt = new Date(d.balance_beam_updated_at);
      if (dt.getTime() > 0) {
        this.balanceBeamData.push(Object.assign({}, d));
      }
    }
  }
}
