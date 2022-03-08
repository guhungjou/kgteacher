import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HealthApiService } from 'src/app/health/health-api.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-student-morning-check-vision-tab',
  templateUrl: './student-morning-check-vision-tab.component.html',
  styleUrls: ['./student-morning-check-vision-tab.component.scss']
})
export class StudentMorningCheckVisionTabComponent implements OnInit, OnChanges {

  @Input() studentID = 0;

  constructor(private api: HealthApiService, private message: NzMessageService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.findStudentMorningChecks();
  }

  loading = false;
  async findStudentMorningChecks() {
    if (!this.studentID) {
      return;
    }
    try {
      this.loading = true;
      const r = await this.api.findStudentMorningChecks(
        '',
        0,
        this.studentID,
        [],
        null,
        null,
        1,
        50,
      );
      const list = r.data.list.reverse();
      for (const o of list) {
        const d = new Date(o.date);
        o.date = `${d.getUTCFullYear()}/${d.getUTCMonth()}/${d.getUTCDate()}`;
      }
      this.data = list;
    } catch (error) {
      console.log(error);
      this.message.error('网络错误');
    } finally {
      this.loading = false;
    }
  }

  data: any = [];
}
