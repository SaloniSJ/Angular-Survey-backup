import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionWithTopNavigationServiceService {

  private _messageSource = new Subject<String>();

  messageSource$=this._messageSource.asObservable();

  private _surveyData=new Subject<any>();

  surveyDataSource$=this._surveyData.asObservable();
  
  constructor() { }

  sendMessage(message:string){
    this._messageSource.next(message);
  }

  sendSurveyData(survey){
    this._surveyData.next(survey);
  }
}
