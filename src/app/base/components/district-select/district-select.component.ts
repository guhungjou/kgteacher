import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NzCascaderOption } from 'ng-zorro-antd/cascader';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-district-select',
  templateUrl: './district-select.component.html',
  styleUrls: ['./district-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: DistrictSelectComponent
    }
  ]
})
export class DistrictSelectComponent implements OnInit, ControlValueAccessor, OnChanges {

  @Input() label = '地区'
  values: string[] = [];

  @Input() value = '';
  @Output() valueChange = new EventEmitter<string>();

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.value) {
      this.getDistrict(this.value);
    } else {
      this.values = [];
    }
  }

  onChanges() {
    if (this.values && this.values.length > 0) {
      this.onFormChange(this.values[this.values.length - 1]);
      this.valueChange.emit(this.values[this.values.length - 1]);
    } else {
      this.onFormChange('');
      this.valueChange.emit('');
    }
  }

  loadData = (node: NzCascaderOption, index: number): PromiseLike<void> => {
    return new Promise(async resolve => {
      let parentID = '';
      if (index < 0) {
        parentID = '';
      } else {
        parentID = node.value;
      }
      node.loading = true;
      const districts = await this.findDistricts(parentID);
      let children = [];
      for (const d of districts) {
        children.push({
          value: d.id,
          label: d.name,
          isLeaf: index === 1,
        })
      }
      node.children = children;
      node.loading = false;
      resolve();
    });
  }

  async findDistricts(parentID: string) {
    try {
      const r = await this.api.findDistricts('', parentID);
      return r.data;
    } catch (error) {

    }
  }

  async getDistrict(id: string) {
    try {
      const r = await this.api.getDistrict(id);
      const data = r.data;
      this.values = [];
      if (data) {
        this.values.push(data.id);
      }
      if (data?.parent) {
        this.values.push(data?.parent?.id);
      }
      if (data?.parent?.parent) {
        this.values.push(data?.parent?.parent?.id);
      }
      this.values.reverse();
    } catch (error) {

    }
  }

  writeValue(v: any) {
    if (v) {
      this.getDistrict(v);
    } else {
      this.values = [];
    }
  }

  onFormChange = (v: any) => { };

  onFormTouched = () => { };

  registerOnChange(onChange: any) {
    this.onFormChange = onChange;
  }

  registerOnTouched(onTouched: any) {
    this.onFormTouched = onTouched;
  }
}
