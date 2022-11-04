import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/base/services/http.service';
import { parseStringQuery } from 'src/app/x/router';

@Component({
  selector: 'app-student-medical-examination-form-list-page',
  templateUrl: './student-medical-examination-form-list-page.component.html',
  styleUrls: ['./student-medical-examination-form-list-page.component.scss'],
})
export class StudentMedicalExaminationFormListPageComponent implements OnInit {
  url: string = '';
  constructor(private route: ActivatedRoute, private http: HttpService) {
    this.url = parseStringQuery(this.route, 'url', '');
  }

  ngOnInit(): void {
    this.fetch();
  }

  forms: any = [];
  async fetch() {
    if (!this.url) {
      return;
    }
    try {
      const r = await this.http.fget(this.url);
      this.forms = r.data.list;
    } catch (error) {}
  }
}
