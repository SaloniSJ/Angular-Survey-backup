import { Component, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { InteractionWithTopNavigationServiceService } from 'src/app/shared/service/interaction-with-top-navigation-service.service';

@Component({
  selector: 'app-view-questions',
  templateUrl: './view-questions.component.html',
  styleUrls: ['./view-questions.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ViewQuestionsComponent implements OnInit {
  @Output() componentName: string = 'ViewQuestion';

  public survey_id: '';

  public survey_name: string = '';

  constructor(private router: Router,
    private interactionWithTopNavigation: InteractionWithTopNavigationServiceService) {
    console.log(
      'Router Navigation data===>',
      this.router.getCurrentNavigation().extras.state
    );
    const data = this.router.getCurrentNavigation().extras.state;
    console.log(data);
    if (data) {
      this.survey_id = data.data.survey_details.surveyId;
      this.survey_name = data.data.survey_details.surveyName;
    }
  }

  ngOnInit(): void {
    const dataToTopNavigation = {
      id:'',
      page_name: 'View Question'
    }
    this.interactionWithTopNavigation.sendSurveyData(dataToTopNavigation);
  }

  // close(value: string) {
  //   this.ref.close(value);
  // }

  goToCreateQuestion(question_type) {
    const data_to_be_forwarded = {
      survey_id: this.survey_id,
      survey_name: this.survey_name,
      question_type: question_type,
    };
    this.router.navigate(['survey/create-question', this.survey_id,question_type]);
    // this.router.navigateByUrl('survey/create-question', {
    //   state: { data: data_to_be_forwarded },
    // });
  }
}
