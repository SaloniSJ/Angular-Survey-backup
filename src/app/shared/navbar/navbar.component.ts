import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core'
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { Router } from '@angular/router';
import { ViewSurveyComponent } from 'src/app/components/survey/view-survey/view-survey.component';
import { InteractionWithTopNavigationServiceService } from '../service/interaction-with-top-navigation-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {

  is_child_visible: boolean = false;

  @ViewChild(ViewSurveyComponent) viewSurveyComponent: ViewSurveyComponent;

  constructor( private _interactionWithTopNavigation:InteractionWithTopNavigationServiceService) { }

  ngOnInit(): void {

    this._interactionWithTopNavigation.messageSource$.subscribe(message=>{
      console.log("This is in Navbar",message)
    })

    this._interactionWithTopNavigation.surveyDataSource$.subscribe(message=>{
      console.log("Current Survey Id :: ", message)
    })
  }

  



}
