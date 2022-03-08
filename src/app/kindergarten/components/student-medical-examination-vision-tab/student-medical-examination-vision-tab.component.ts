import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HealthApiService } from 'src/app/health/health-api.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-student-medical-examination-vision-tab',
  templateUrl: './student-medical-examination-vision-tab.component.html',
  styleUrls: ['./student-medical-examination-vision-tab.component.scss']
})
export class StudentMedicalExaminationVisionTabComponent implements OnInit, OnChanges {

  @Input() studentID = 0;
  constructor(private api: HealthApiService, private message: NzMessageService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.findStudentMedicalExaminations();
  }

  heightData: any[] = [];
  weightData: any[] = [];
  loading = false;


  updateHeightData(data: any) {
    this.heightData = [];
    for (const d of data) {
      const dt = new Date(d.height_updated_at);
      if (dt.getTime() > 0) {
        this.heightData.push(Object.assign({}, d));
      }
    }
  }

  updateWeightData(data: any) {
    this.weightData = [];
    for (const d of data) {
      const dt = new Date(d.weight_updated_at);
      if (dt.getTime() > 0) {
        this.weightData.push(Object.assign({}, d));
      }
    }
  }

  bmiData: any[] = [];
  updateBMIData(data: any) {
    this.bmiData = [];
    for (const d of data) {
      const dt = new Date(d.bmi_updated_at);
      if (dt.getTime() > 0) {
        this.bmiData.push(Object.assign({}, d));
      }
    }
  }

  hbData: any[] = [];
  updateHemoglobinData(data: any) {
    this.hbData = [];
    for (const d of data) {
      const dt = new Date(d.hemoglobin_updated_at);
      if (dt.getTime() > 0) {
        this.hbData.push(Object.assign({}, d));
      }
    }
  }

  altData: any[] = [];
  updateALTData(data: any) {
    this.altData = [];
    for (const d of data) {
      const dt = new Date(d.alt_updated_at);
      if (dt.getTime() > 0) {
        this.altData.push(Object.assign({}, d));
      }
    }
  }

  sightData: any[] = [];
  updateSightData(data: any) {
    this.sightData = [];
    for (const d of data) {
      const dt = new Date(d.sight_updated_at);
      if (dt.getTime() > 0) {
        this.sightData.push({
          v: '左眼',
          sight: d.sight_l,
          date: d.date,
        });
        this.sightData.push({
          v: '右眼',
          sight: d.sight_r,
          date: d.date,
        });
      }
    }
  }

  async findStudentMedicalExaminations() {
    if (!this.studentID) {
      return;
    }
    try {
      this.loading = true;
      const r = await this.api.findStudentMedicalExaminations(
        '',
        0,
        this.studentID,
        [], [], [], [], [], [],
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
      this.updateHeightData(list);
      this.updateWeightData(list);
      this.updateBMIData(list);
      this.updateHemoglobinData(list);
      this.updateALTData(list);
      this.updateSightData(list);
    } catch (error) {
      this.message.error('网络错误');
    } finally {
      this.loading = false;
    }
  }

}
