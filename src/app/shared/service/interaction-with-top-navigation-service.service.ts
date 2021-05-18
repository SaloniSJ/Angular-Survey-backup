import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionWithTopNavigationServiceService {

  private _surveyListSource = new Subject<any>();
  surveyListSource$=this._surveyListSource.asObservable();

  private _surveyData=new Subject<any>();
  surveyDataSource$=this._surveyData.asObservable();

  private _paginationDetailsSource=new Subject<any>();
  paginationDetailsSource$=this._paginationDetailsSource.asObservable();
  
  constructor() { }

  sendSurveyList(surveyList){
    this._surveyListSource.next(surveyList);
  }

  sendSurveyData(survey){
    this._surveyData.next(survey);
  }

  sendPaginationDetailsSource(data){
    this._paginationDetailsSource.next(data);
  }
}
