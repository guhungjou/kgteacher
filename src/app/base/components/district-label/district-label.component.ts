import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-district-label',
  templateUrl: './district-label.component.html',
  styleUrls: ['./district-label.component.scss']
})
export class DistrictLabelComponent implements OnInit, OnChanges {

  @Input() id: string = '';

  data: any = null;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getDistrict();
  }

  async getDistrict() {
    if (!this.id) {
      this.data = null;
      return;
    }
    try {
      const r = await this.api.getDistrict(this.id);
      this.data = r.data;
    } catch (error) {

    }
  }

}
