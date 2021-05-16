import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  private apiURL = "https://zwl1svm33i.execute-api.ap-south-1.amazonaws.com/dev";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // httpFileOptions={
  //   headers: new HttpHeaders({
  //     'Content-Type':'multipart/form-data'
  //   })
  // }

  constructor(private httpClient: HttpClient) { }

  fetchAllSurvey(user) {
    return this.httpClient.get<any>(this.apiURL + `/fetch-all-surveys?userId=${user.userId}&page=${user.page}&size=${user.size}`, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  createSurvey(data) {
    return this.httpClient.post<any>(this.apiURL + '/create-survey', data, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  uploadSurveyImage(data){
    return this.httpClient.post<any>(this.apiURL+'/upload-survey-logo',data)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
}
