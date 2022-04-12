import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-student-fitness-test-modal',
  templateUrl: './student-fitness-test-modal.component.html',
  styleUrls: ['./student-fitness-test-modal.component.scss']
})
export class StudentFitnessTestModalComponent implements OnInit, OnChanges {

  @Input() isVisible = false;
  @Output() isVisibleChange = new EventEmitter<boolean>();
  loading = false;

  @Input() data: any = {};

  radarData: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.isVisible) {
      this.update();
    }
  }

  close() {
    this.isVisible = false;
    this.isVisibleChange.emit(false);
  }

  update() {
    this.radarData = [];
    this.radarData.push({
      name: '身高/体重(厘米/千克)',
      value: this.data.height_and_weight_score,
    });
    this.radarData.push({
      name: '10米折返跑(秒)',
      value: this.data.shuttle_run_10_score,
    });
    this.radarData.push({
      name: '立定跳远(厘米)',
      value: this.data.standing_long_jump_score,
    });
    this.radarData.push({
      name: '网球掷远(米)',
      value: this.data.baseball_throw_score,
    });
    this.radarData.push({
      name: '双脚连续跳(秒)',
      value: this.data.bunny_hopping_score,
    });
    this.radarData.push({
      name: '坐位体前屈(厘米)',
      value: this.data.sit_and_reach_score,
    });
    this.radarData.push({
      name: '走平衡木(秒)',
      value: this.data.balance_beam_score,
    });
  }
}
