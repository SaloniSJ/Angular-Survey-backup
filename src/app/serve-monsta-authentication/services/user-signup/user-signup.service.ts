import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http'

import {User} from '../../../core/user'

import { Observable,throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserSignupService {

  private apiURL="http://3.6.39.207:8080";

  private userId:string;

  httpOptions={
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  signUp(user): Observable<any> {
      console.log("URL",this.apiURL,"User in signup==>",user)
      return this.httpClient.post<User>(this.apiURL+'/signup',user,this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
        )
      
  }

  verifyEmail(data){
    return this.httpClient.post<any>(this.apiURL+'/verify-email',data,this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
        )
  }

  verifyPhonenumber(user){
    return this.httpClient.post<any>(this.apiURL+'/verify-mobile',user,this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
      )
  }
  
  errorHandler(error:HttpErrorResponse){
    return throwError(error);
  }
}
