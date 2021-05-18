import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core'
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { Router } from '@angular/router';
import { ViewSurveyComponent } from 'src/app/components/survey/view-survey/view-survey.component';
import { InteractionWithTopNavigationServiceService } from '../service/interaction-with-top-navigation-service.service';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { SurveyService } from 'src/services/survey/survey.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {

  public page_name = '';

  public survey_id='';
  
  public total_pages: string = '';

  public page_size = 10;

  public page_number: string = '';

  public total_elements: string = '';

  public pageEvent: PageEvent;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor( 
    private router: Router,
    private surveyService: SurveyService,
    private spinner: NgxSpinnerService,
    private _interactionWithTopNavigation: InteractionWithTopNavigationServiceService
    ) { }

  ngOnInit(): void {

    this._interactionWithTopNavigation.surveyDataSource$.subscribe(message => {
      console.log("Current Survey Id :: ", message)
      this.page_name=message.page_name;
      this.survey_id=message.id;
    })

    this._interactionWithTopNavigation.paginationDetailsSource$.subscribe(message => {
      console.log("Current Survey Pagination_details :: ", message)
      this.page_number=message.pageNumber,
      this.page_size=message.size,
      this.total_elements=message.totalElements,
      this.total_pages=message.totalPages
    })
  }

  navigateToPreviewSurvey(){
    this.router.navigate(['survey/preview-question', this.survey_id]);
  }

  public changePageNumber(e?: PageEvent) {
    console.log(e);
    const payload = {
      userId: localStorage.getItem('userId'),
      size: e.pageSize,
      page: e.pageIndex,
    };
    this.fetchAllSurvey(payload);
    return e;
  }

  fetchAllSurvey(payload){
    this.spinner.show();
    this.surveyService.fetchAllSurvey(payload).subscribe(
      (response) => {
        console.log(response);
        if (response.status) {
          console.log(response);
          this._interactionWithTopNavigation.sendSurveyList(response.surveyDetails)
          this.spinner.hide();
        } else {
          this.spinner.hide();
          console.log('Error====>', response);
        }
      },
      (error) => {
        this.spinner.hide();
      }
    );
  }



}
