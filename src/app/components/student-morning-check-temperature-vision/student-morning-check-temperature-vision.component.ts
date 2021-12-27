import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-student-morning-check-temperature-vision',
  templateUrl: './student-morning-check-temperature-vision.component.html',
  styleUrls: ['./student-morning-check-temperature-vision.component.scss']
})
export class StudentMorningCheckTemperatureVisionComponent implements OnInit, OnChanges {

  @Input() studentID = 0;

  constructor(private api: ApiService, private message: NzMessageService) { }

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
        100,
      );
      const list = r.data.list.reverse();
      for (const o of list) {
        const d = new Date(o.date);
        o.date = `${d.getUTCFullYear()}/${d.getUTCMonth()}/${d.getUTCDate()}`;
      }
      this.data = list;
      // this.renderLine(list);
    } catch (error) {
      console.log(error);
      this.message.error('网络错误');
    } finally {
      this.loading = false;
    }
  }

  data: any = [];

  // line: null | Line = null;
  // renderLine(data: any) {
  //   const cfg: LineOptions = {
  //     data,
  //     padding: 'auto',
  //     xField: 'date',
  //     yField: 'temperature',
  //     smooth: true,
  //     xAxis: {
  //       title: {
  //         text: '日期',
  //       },
  //     },
  //     yAxis: {
  //       title: {
  //         text: '体温 ℃'
  //       },
  //       min: 35,
  //       // max: 38.5,
  //     },
  //     annotations: [
  //       {
  //         type: 'regionFilter',
  //         start: ['min', '37.3'],
  //         end: ['max', 'max'],
  //         color: '#F4664A',
  //       },
  //       {
  //         type: 'regionFilter',
  //         start: ['min', '0'],
  //         end: ['max', '36.0'],
  //         color: '#F4664A',
  //       },
  //       {
  //         type: 'text',
  //         position: ['min', '36.0'],
  //         content: '36.0',
  //         offsetY: -4,
  //         style: {
  //           textBaseline: 'bottom',
  //         },
  //       },
  //       {
  //         type: 'line',
  //         start: ['min', '36.0'],
  //         end: ['max', '36.0'],
  //         style: {
  //           stroke: '#F4664A',
  //           lineDash: [2, 2],
  //         },
  //       },
  //       {
  //         type: 'text',
  //         position: ['min', '37.3'],
  //         content: '37.3',
  //         offsetY: -4,
  //         style: {
  //           textBaseline: 'bottom',
  //         },
  //       },
  //       {
  //         type: 'line',
  //         start: ['min', '37.3'],
  //         end: ['max', '37.3'],
  //         style: {
  //           stroke: '#F4664A',
  //           lineDash: [2, 2],
  //         },
  //       },
  //     ],
  //   };
  //   if (this.line) {
  //     this.line.update(cfg);
  //   } else {
  //     this.line = new Line(this.el.nativeElement.querySelector('#line'), cfg);
  //   }

  //   this.line.render();
  // }
}
