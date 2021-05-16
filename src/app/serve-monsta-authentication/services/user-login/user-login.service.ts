import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http'

import {User} from '../../../core/user'

import { Observable,throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UserLoginService {

  private apiURL="https://zwl1svm33i.execute-api.ap-south-1.amazonaws.com/dev";

  httpOptions={
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  
  constructor(private httpClient: HttpClient) { }

  signIn(user) {
      return this.httpClient.post<any>(this.apiURL+'/signin',user,this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
        )
  }

  forgotPassword(data){
    return this.httpClient.post<any>(this.apiURL+'/forgot-password',data,this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
      )
  }

  confirmForgotPassword(user){
    return this.httpClient.post<any>(this.apiURL+'/confirm-forgot-password',user,this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
      )
  }

  errorHandler(error:HttpErrorResponse){
    return throwError(error);
  }
}
