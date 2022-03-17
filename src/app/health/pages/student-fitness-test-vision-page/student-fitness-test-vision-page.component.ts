import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-student-fitness-test-vision-page',
  templateUrl: './student-fitness-test-vision-page.component.html',
  styleUrls: ['./student-fitness-test-vision-page.component.scss']
})
export class StudentFitnessTestVisionPageComponent implements OnInit {

  queryDate: null | Date = null;
  queryClassID = 0;

  constructor(private title: Title) {
    this.title.setTitle('健康管理 - 体测统计');
  }

  ngOnInit(): void {
  }


  search() {

  }
}
