import {
  Component,
  OnInit,
  Output,
  Input,
  EventEmitter,
  ElementRef,
  Renderer2,
  OnChanges,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { SurveyService } from '../../../../services/survey/survey.service';
import { Survey } from './../../../core/survey/survey';
import Message from 'src/app/utils/message';
import { NgxSpinnerService } from 'ngx-spinner';
import { InteractionWithTopNavigationServiceService } from 'src/app/shared/service/interaction-with-top-navigation-service.service';

@Component({
  selector: 'app-view-survey',
  templateUrl: './view-survey.component.html',
  styleUrls: ['./view-survey.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ViewSurveyComponent implements OnChanges {
  hasError: boolean = false;
  errorMsg: string = '';
  survey_list: [];
  message = new Message();
  user_id = '';
  survey_id='';

  @Input() is_child:boolean;

  @Output() childToParent = new EventEmitter(); 

  addchildToParent(value){
    //emit value survey_id
    
  }

  constructor(
    private surveyService: SurveyService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private interactionWithTopNavigation:InteractionWithTopNavigationServiceService
  ) {
    console.log("Constructor of Child")
  }

  ngOnChanges(changes: SimpleChanges){

    console.log(changes);

  }

  sendMessageViaService() {
    this.interactionWithTopNavigation.sendMessage('Hey I am from view Survey')
  }

  ngOnInit(): void {
    const user_id = localStorage.getItem('userId');
    this.sendMessageViaService();
    this.user_id = user_id;
    this.spinner.show();
    const data = { userId: user_id, page: 0, size: 10 };
    this.surveyService.fetchAllSurvey(data).subscribe(
      (response) => {
        console.log(response);
        if (response.status) {
          console.log(response);
          this.survey_list = response.surveyDetails;
          this.spinner.hide();
        } else {
          this.hasError = true;
          this.spinner.hide();
          console.log('Error====>', response);
          this.errorMsg = response.message;
        }
      },
      (error) => {
        this.spinner.hide();
        this.errorMsg == this.message.error;
      }
    );
  }

  fetchAllSurvey(page_no) {
    console.log('Clicked ==>', page_no);
    const data = {
      userId: this.user_id,
      page: page_no,
      size: 10,
    };
    this.surveyService.fetchAllSurvey(data).subscribe(
      (response) => {
        console.log(response);
        if (response.status) {
          console.log(response);
          this.survey_list = response.surveyDetails;
        } else {
          this.hasError = true;
          console.log('Error====>', response);
          this.errorMsg = response.message;
        }
      },
      (error) => {
        this.errorMsg == this.message.error;
      }
    );
  }

  navigateToCreateQuestion(survey) {
    console.log(survey);
    const surveyDetails = {
      surveyId: survey.surveyId,
      survey_name: survey.survey_name,
    };
    const data_to_be_forwarded = {
      survey_details: surveyDetails,
      user_id: this.user_id,
    };
    if (survey.questionCount > 0) {
      console.log('question count is greater then 0');
      const create_question_page_data_to_be_forwarded = {
        survey_id: survey.surveyId,
        survey_name: survey.survey_name,
        question_type: 'RADIO',
      };
      this.router.navigate(['survey/create-question', survey.surveyId]);
      // this.router.navigateByUrl('survey/create-question', {
      //   state: { data: create_question_page_data_to_be_forwarded },
      // });
    } else {
      this.router.navigateByUrl('survey/view-question', {
        state: { data: data_to_be_forwarded },
      });
    }
  }
}
