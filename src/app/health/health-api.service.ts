import { Injectable } from '@angular/core';
import { HttpService } from '../base/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class HealthApiService {

  constructor(private http: HttpService) { }

  findStudentMorningChecks(
    query: string,
    classID: number,
    studentID: number,
    temperatureFilters: string[],
    startTime: any,
    endTime: any,
    page: number,
    pageSize: number
  ) {
    const q: any = {
      query,
      class_id: classID,
      temperature_filters: temperatureFilters,
      page,
      page_size: pageSize,
      student_id: studentID,
    };
    if (startTime) {
      q['start_time'] = startTime;
    }
    if (endTime) {
      q['end_time'] = endTime;
    }
    const url = this.http.buildurl('/student/morning/checks', q);
    return this.http.get(url);
  }

  exportStudentMorningChecks(
    query: string,
    classID: number,
    studentID: number,
    temperatureFilters: string[],
    startTime: any,
    endTime: any,
    page: number,
    pageSize: number
  ) {
    const q: any = {
      query,
      class_id: classID,
      temperature_filters: temperatureFilters,
      page,
      page_size: pageSize,
      student_id: studentID,
    };
    if (startTime) {
      q['start_time'] = startTime;
    }
    if (endTime) {
      q['end_time'] = endTime;
    }
    const url = this.http.buildurl('/student/morning/checks/export', q);
    return window.open(url, '_blank');
  }

  findStudentMedicalExaminations(
    query: string,
    classID: number,
    studentID: number,
    heightFilters: string[],
    weightFilters: string[],
    hemoglobinFilters: string[],
    sightFilters: string[],
    altFilters: string[],
    bmiFilters: string[],
    startTime: any,
    endTime: any,
    page: number,
    pageSize: number
  ) {
    const q: any = {
      query,
      class_id: classID,
      page,
      page_size: pageSize,
      student_id: studentID,
      height_filters: heightFilters,
      weight_filters: weightFilters,
      hemoglobin_filters: hemoglobinFilters,
      sight_filters: sightFilters,
      alt_filters: altFilters,
      bmi_filters: bmiFilters,
    };
    if (startTime) {
      q['start_time'] = startTime;
    }
    if (endTime) {
      q['end_time'] = endTime;
    }
    const url = this.http.buildurl('/student/medical/examinations', q);
    return this.http.fget(url);
  }
  exportStudentMedicalExaminations(
    query: string,
    classID: number,
    studentID: number,
    heightFilters: string[],
    weightFilters: string[],
    hemoglobinFilters: string[],
    sightFilters: string[],
    altFilters: string[],
    bmiFilters: string[],
    startTime: any,
    endTime: any,
    page: number,
    pageSize: number
  ) {
    const q: any = {
      query,
      class_id: classID,
      page,
      page_size: pageSize,
      student_id: studentID,
      height_filters: heightFilters,
      weight_filters: weightFilters,
      hemoglobin_filters: hemoglobinFilters,
      sight_filters: sightFilters,
      alt_filters: altFilters,
      bmi_filters: bmiFilters,
    };
    if (startTime) {
      q['start_time'] = startTime;
    }
    if (endTime) {
      q['end_time'] = endTime;
    }
    const url = this.http.buildurl('/student/medical/examinations/export', q);
    return window.open(url, '_blank');
  }

  getStudentMedicalExamination(id: number) {
    const url = this.http.buildurl('/student/medical/examination/' + id);
    return this.http.fget(url);
  }

  findStudentMorningCheckTemperatureVision(date: any, classID: number) {
    const url = this.http.buildurl('/student/morning/check/temperature/vision', { date, class_id: classID });
    return this.http.fget(url);
  }

  findStudentMedicalExaminationHeightVision(date: any, classID: number) {
    const url = this.http.buildurl('/student/medical/examination/height/vision', { date, class_id: classID });
    return this.http.fget(url);
  }
  findStudentMedicalExaminationDates() {
    const url = this.http.buildurl('/student/medical/examination/dates');
    return this.http.fget(url);
  }

  findStudentMedicalExaminationWeightVision(date: any, classID: number) {
    const url = this.http.buildurl('/student/medical/examination/weight/vision', { date, class_id: classID });
    return this.http.fget(url);
  }

  findStudentMedicalExaminationBMIVision(date: any, classID: number) {
    const url = this.http.buildurl('/student/medical/examination/bmi/vision', { date, class_id: classID });
    return this.http.fget(url);
  }

  findStudentMedicalExaminationHemoglobinVision(date: any, classID: number) {
    const url = this.http.buildurl('/student/medical/examination/hemoglobin/vision', { date, class_id: classID });
    return this.http.fget(url);
  }

  findStudentMedicalExaminationALTVision(date: any, classID: number) {
    const url = this.http.buildurl('/student/medical/examination/alt/vision', { date, class_id: classID });
    return this.http.fget(url);
  }

  findStudentMedicalExaminationSightVision(date: any, classID: number) {
    const url = this.http.buildurl('/student/medical/examination/sight/vision', { date, class_id: classID });
    return this.http.fget(url);
  }

  findStudentFitnessTests(
    query: string,
    classID: number,
    studentID: number,
    startTime: any,
    endTime: any,
    heightWeightFilters: number[],
    shuttleRun10Filters: number[],
    standingLongJumpFilters: number[],
    baseballThrowFilters: number[],
    bunnyHoppingFilters: number[],
    sitAndReachFilters: number[],
    balanceBeamFilters: number[],
    totalStatusFilters: string[],
    page: number,
    pageSize: number
  ) {
    const q: any = {
      query,
      class_id: classID,
      height_weight_filters: heightWeightFilters,
      shuttle_run_10_filters: shuttleRun10Filters,
      standing_long_jump_filters: standingLongJumpFilters,
      baseball_throw_filters: baseballThrowFilters,
      bunny_hopping_filters: bunnyHoppingFilters,
      sit_and_reach_filters: sitAndReachFilters,
      balance_beam_filters: balanceBeamFilters,
      total_status_filters: totalStatusFilters,
      page,
      page_size: pageSize,
      student_id: studentID,
    };
    if (startTime) {
      q['start_time'] = startTime;
    }
    if (endTime) {
      q['end_time'] = endTime;
    }
    const url = this.http.buildurl('/student/fitness/tests', q);
    return this.http.fget(url);
  }
  exportStudentFitnessTests(
    query: string,
    classID: number,
    studentID: number,
    startTime: any,
    endTime: any,
    page: number,
    pageSize: number
  ) {
    const q: any = {
      query,
      class_id: classID,
      page,
      page_size: pageSize,
      student_id: studentID,
    };
    if (startTime) {
      q['start_time'] = startTime;
    }
    if (endTime) {
      q['end_time'] = endTime;
    }
    const url = this.http.buildurl('/student/fitness/tests/export', q);
    return window.open(url, '_blank');
  }

  findStudentFitnessTestDates() {
    const url = this.http.buildurl('/student/fitness/test/dates');
    return this.http.fget(url);
  }

  findKindergartenStudentFitnessTestScoreShuttleRun10Vision(classID: number, date: any) {
    const url = this.http.buildurl('/student/fitness/test/shuttle_run_10/vision', { class_id: classID, date });
    return this.http.fget(url);
  }

  findKindergartenStudentFitnessTestScoreStandingLongJumpVision(classID: number, date: any) {
    const url = this.http.buildurl('/student/fitness/test/standing_long_jump/vision', { class_id: classID, date });
    return this.http.fget(url);
  }

  findKindergartenStudentFitnessTestScoreBaseballThrowVision(classID: number, date: any) {
    const url = this.http.buildurl('/student/fitness/test/baseball_throw/vision', { class_id: classID, date });
    return this.http.fget(url);
  }

  findKindergartenStudentFitnessTestScoreBunnyHoppingVision(classID: number, date: any) {
    const url = this.http.buildurl('/student/fitness/test/bunny_hopping/vision', { class_id: classID, date });
    return this.http.fget(url);
  }

  findKindergartenStudentFitnessTestScoreSitAndReachVision(classID: number, date: any) {
    const url = this.http.buildurl('/student/fitness/test/sit_and_reach/vision', { class_id: classID, date });
    return this.http.fget(url);
  }

  findKindergartenStudentFitnessTestScoreBalanceBeamVision(classID: number, date: any) {
    const url = this.http.buildurl('/student/fitness/test/balance_beam/vision', { class_id: classID, date });
    return this.http.fget(url);
  }
}
