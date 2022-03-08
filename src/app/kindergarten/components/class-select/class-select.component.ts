import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-class-select',
  templateUrl: './class-select.component.html',
  styleUrls: ['./class-select.component.scss'],
})
export class ClassSelectComponent implements OnInit, OnChanges {
  @Input() value = 0;
  @Output() valueChange = new EventEmitter<number>();
  options: any[] = [];
  loading = false;

  constructor(private api: ApiService, private message: NzMessageService) {}

  ngOnInit(): void {}

  ngOnChanges() {
    if (this.value) {
      for (const o of this.options) {
        if (o.id === this.value) {
          return;
        }
      }
      this.getClass(this.value);
    }
  }

  async getClass(id: number) {
    try {
      const r = await this.api.getClass(id);
      this.options = [r.data];
    } catch (error) {}
  }

  onChange() {
    this.value = this.value || 0;
    this.valueChange.emit(this.value);
  }

  async search(q: string) {
    try {
      this.loading = true;
      const r = await this.api.findClasses(q || '', 1, 20);
      this.options = r.data.list;
    } catch (error) {
      this.message.error('网络错误');
    } finally {
      this.loading = false;
    }
  }
}
