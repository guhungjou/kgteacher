import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NZ_I18N, zh_CN } from 'ng-zorro-antd/i18n';
import { ApiInterceptor } from './services/api.interceptor';
import { BrowserModule } from '@angular/platform-browser';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzTreeModule } from 'ng-zorro-antd/tree';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzCascaderModule } from 'ng-zorro-antd/cascader';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzNotificationServiceModule } from 'ng-zorro-antd/notification';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons.module';
import { AltLabelComponent } from './components/alt-label/alt-label.component';
import { BmiLabelComponent } from './components/bmi-label/bmi-label.component';
import { DateLabelComponent } from './components/date-label/date-label.component';
import { DatetimeLabelComponent } from './components/datetime-label/datetime-label.component';
import { FileSelectComponent } from './components/file-select/file-select.component';
import { GenderComponent } from './components/gender/gender.component';
import { GenderSelectComponent } from './components/gender-select/gender-select.component';
import { InputComponent } from './components/input/input.component';
import { SearchButtonComponent } from './components/search-button/search-button.component';
import { UpOrDownComponent } from './components/up-or-down/up-or-down.component';
import { HeightAndWeightLabelComponent } from './components/height-and-weight-label/height-and-weight-label.component';
import { HemoglobinLabelComponent } from './components/hemoglobin-label/hemoglobin-label.component';
import { SightLabelComponent } from './components/sight-label/sight-label.component';
import { ToothLabelComponent } from './components/tooth-label/tooth-label.component';
import { WeightLabelComponent } from './components/weight-label/weight-label.component';
import { HeightLabelComponent } from './components/height-label/height-label.component';
import { TemperatureLabelComponent } from './components/temperature-label/temperature-label.component';
import { ScoreLabelComponent } from './components/score-label/score-label.component';
import { RadarComponent } from './components/radar/radar.component';
import { DistrictLabelComponent } from './components/district-label/district-label.component';
import { DistrictSelectComponent } from './components/district-select/district-select.component';
import { FullscreenComponent } from './components/fullscreen/fullscreen.component';
import { LiquidComponent } from './components/liquid/liquid.component';
import { G2LineComponent } from './components/g2-line/g2-line.component';
import { G2PieComponent } from './components/g2-pie/g2-pie.component';
import { G2ColumnComponent } from './components/g2-column/g2-column.component';

registerLocaleData(zh);


const modules = [
  CommonModule,
  BrowserModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  BrowserAnimationsModule,
  IconsProviderModule,

  NzFormModule,
  NzPaginationModule,
  NzBreadCrumbModule,
  NzDatePickerModule,
  NzStatisticModule,
  NzDescriptionsModule,
  NzLayoutModule,
  NzMessageModule,
  NzPopconfirmModule,
  NzPopoverModule,
  NzButtonModule,
  NzTabsModule,
  NzTableModule,
  NzMenuModule,
  NzSelectModule,
  NzInputModule,
  NzInputNumberModule,
  NzDropDownModule,
  NzAvatarModule,
  NzModalModule,
  NzToolTipModule,
  NzBadgeModule,
  NzPopoverModule,
  NzIconModule,
  NzDividerModule,
  NzSpinModule,
  NzCheckboxModule,
  NzTreeModule,
  NzTreeSelectModule,
  NzListModule,
  NzSwitchModule,
  NzCollapseModule,
  NzUploadModule,
  NzTagModule,
  NzAutocompleteModule,
  NzTimelineModule,
  NzRadioModule,
  NzNotificationServiceModule,
  NzCardModule,
  NzEmptyModule,
  NzCascaderModule,
];

@NgModule({
  declarations: [
    AltLabelComponent,
    BmiLabelComponent,
    DateLabelComponent,
    DatetimeLabelComponent,
    FileSelectComponent,
    GenderComponent,
    GenderSelectComponent,
    InputComponent,
    SearchButtonComponent,
    UpOrDownComponent,
    HeightAndWeightLabelComponent,
    HemoglobinLabelComponent,
    SightLabelComponent,
    ToothLabelComponent,
    WeightLabelComponent,
    HeightLabelComponent,
    TemperatureLabelComponent,
    ScoreLabelComponent,
    RadarComponent,
    DistrictLabelComponent,
    DistrictSelectComponent,
    FullscreenComponent,
    LiquidComponent,
    G2LineComponent,
    G2PieComponent,
    G2ColumnComponent,
  ],
  imports: [
    ...modules,
    CommonModule,
  ],
  exports: [
    ...modules,
    AltLabelComponent,
    BmiLabelComponent,
    DateLabelComponent,
    DatetimeLabelComponent,
    FileSelectComponent,
    GenderComponent,
    GenderSelectComponent,
    InputComponent,
    SearchButtonComponent,
    UpOrDownComponent,
    HeightAndWeightLabelComponent,
    HemoglobinLabelComponent,
    SightLabelComponent,
    ToothLabelComponent,
    WeightLabelComponent,
    HeightLabelComponent,
    TemperatureLabelComponent,
    ScoreLabelComponent,
    RadarComponent,
    DistrictLabelComponent,
    DistrictSelectComponent,
    FullscreenComponent,
    LiquidComponent,
    G2LineComponent,
    G2PieComponent,
    G2ColumnComponent,
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true,
    },
  ],
})
export class BaseModule { }
