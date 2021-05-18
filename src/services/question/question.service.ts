import { Injectable } from '@angular/core';


import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { Questions } from '../../app/core/question/questions'
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private apiURL = "https://zwl1svm33i.execute-api.ap-south-1.amazonaws.com/dev";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  httpMultimediaHeader = {
    headers: new HttpHeaders({
       'Content-Type': 'image/jpeg', 
    })
  }
  constructor(private httpClient: HttpClient) { }

  uploadImageToS3(apiUrl,image){
    console.log(image)
   const data={
     fileName:image.fileName,
     image:image
   }
    return this.httpClient.put<any>(apiUrl,data,this.httpMultimediaHeader)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  fetchPreSignedUrl(data){
    console.log("fetchPreSignedUrldata",data)
    return this.httpClient.get<any>(this.apiURL+`/generate-presigned-url?key=${data.question_id}/${data.image_name}`,this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  fetchAllQuestionType() {
    return this.httpClient.get<any>(this.apiURL + `/fetch-question-types`, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  fetchQuestions(data) {
    return this.httpClient.get<any>(this.apiURL + `/fetch-questions?surveyId=${data.surveyId}&userId=${data.userId}&languageCode=${data.languageCode}&page=${data.page}&size=${data.size}`, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  createQuestion(data) {
    return this.httpClient.post<any>(this.apiURL + '/create-question', data, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  deleteQuestion(data){
    return this.httpClient.delete<any>(this.apiURL+`/delete-question?surveyId=${data.surveyId}&questionId=${data.questionId}&userId=${data.userId}&languageCode=${data.languageCode}`,this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  uploadQuestionMultimedia(data) {
    return this.httpClient.post<any>(this.apiURL+'/upload-multimedia-question',data)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
}
