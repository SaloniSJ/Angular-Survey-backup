import { Component, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {
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

  ngOnInit(): void {}

  // close(value: string) {
  //   this.ref.close(value);
  // }

  goToCreateQuestion(question_type) {
    const data_to_be_forwarded = {
      survey_id: this.survey_id,
      survey_name: this.survey_name,
      question_type: question_type,
    };
    this.router.navigate(['survey/create-question', this.survey_id]);
    // this.router.navigateByUrl('survey/create-question', {
    //   state: { data: data_to_be_forwarded },
    // });
  }
}
