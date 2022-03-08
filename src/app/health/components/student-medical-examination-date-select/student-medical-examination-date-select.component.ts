import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ApiService } from 'src/app/services/api.service';
import { HealthApiService } from '../../health-api.service';

@Component({
  selector: 'app-student-medical-examination-date-select',
  templateUrl: './student-medical-examination-date-select.component.html',
  styleUrls: ['./student-medical-examination-date-select.component.scss']
})
export class StudentMedicalExaminationDateSelectComponent implements OnInit {

  @Input() value: null | Date = null;
  @Output() valueChange = new EventEmitter<null | Date>();
  @Output() initial = new EventEmitter<Date | null>();
  options: any[] = [];
  loading = false;

  constructor(private api: HealthApiService, private message: NzMessageService) { }

  ngOnInit(): void {
    this.findStudentMedicalExaminationDates();
  }


  onChange() {
    this.value = this.value || null;
    this.valueChange.emit(this.value);
  }

  async findStudentMedicalExaminationDates() {
    try {
      this.loading = true;
      const r = await this.api.findStudentMedicalExaminationDates();
      this.options = [];
      for (const d of r.data) {
        this.options.push(new Date(d));
      }
      if (this.options.length > 0) {
        this.value = this.options[0];
        this.valueChange.emit(this.value);
        this.initial.emit(this.value);
      }
    } catch (error) {
      this.message.error('网络错误');
    } finally {
      this.loading = false;
    }
  }

  format(d: Date) {
    let year = d.getFullYear();
    let month: string | number = d.getUTCMonth() + 1;
    let date: string | number = d.getUTCDate();
    if (month < 10) {
      month = '0' + month;
    }
    if (date < 10) {
      date = '0' + date;
    }
    return `${year}/${month}/${date}`;
  }
}
