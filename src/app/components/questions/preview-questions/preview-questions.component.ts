import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { Option } from '../../../core/question/option';
import { DynamicFormComponent } from '../dynamic-form/dynamic-form.component';

import { QuestionService } from '../../../../services/question/question.service';
import Message from 'src/app/utils/message';

@Component({
  selector: 'app-preview-questions',
  templateUrl: './preview-questions.component.html',
  styleUrls: ['./preview-questions.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class PreviewQuestionsComponent implements OnInit {
  private survey_id: string = '';

  public question_list: [];

  private hasError: boolean = false;

  private errorMsg: string = '';

  private message = new Message();

  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;

  queryObject : any;
  
  constructor(
    private questionService: QuestionService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.survey_id=this.route.snapshot.paramMap.get('survey_id')
    const user_id = localStorage.getItem('userId');
    const data = {
      surveyId: this.survey_id,
      userId: user_id,
      languageCode: 'en',
      page:0,
      size:10
    };
    console.log(data);
    this.questionService.fetchQuestions(data).subscribe(
      (response) => {
        console.log(response);
        if (response.status) {
          console.log(response);
          this.question_list = response.surveyQuestionResponseBeans;
        } else {
          this.hasError = true;
          console.log('Error====>', response);
          this.errorMsg = response.message;
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

 

  submit(value: any) {}
}
