import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { NzUploadFile } from 'ng-zorro-antd/upload';

@Component({
  selector: 'app-file-select',
  styleUrls: ['./file-select.component.scss'],
  templateUrl: './file-select.component.html',
})
export class FileSelectComponent implements OnInit, OnChanges {
  @Input() file: any = null;
  @Input() label = '附件';
  @Output() fileChange = new EventEmitter<any>();
  @Input() accept = '';
  fileList: NzUploadFile[] = [];

  ngOnInit() {}

  ngOnChanges() {
    if (this.file) {
      this.fileList = [this.file];
    } else {
      this.fileList = [];
    }
  }

  beforeUpload = (file: NzUploadFile): boolean => {
    this.fileList = [file];
    this.file = file;
    this.fileChange.emit(this.file);
    return false;
  };
}
