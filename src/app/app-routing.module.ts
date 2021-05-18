import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServeMonstaAuthenticationRoutingModule } from './serve-monsta-authentication/serve-monsta-authentication-routing.module'
import { CreateSurveyComponent } from './components/survey/create-survey/create-survey.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SideNavigationComponent } from './shared/side-navigation/side-navigation.component';
import { ViewSurveyComponent } from './components/survey/view-survey/view-survey.component';
import { ViewQuestionsComponent } from './components/questions/view-questions/view-questions.component';
import { CreateQuestionsComponent } from './components/questions/create-questions/create-questions.component';
import { PreviewQuestionsComponent } from './components/questions/preview-questions/preview-questions.component'

const routes: Routes = [
  { path: '', component: ServeMonstaAuthenticationRoutingModule },
  {
    path: 'survey',
    component: NavbarComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'create-survey',
        component: CreateSurveyComponent
      },
      {
        path: 'view-survey',
        component: ViewSurveyComponent
      },
      {
        path: '',
        outlet: 'sidemenu',
        component: SideNavigationComponent
      },
      {
        path:'view-question',
        component:ViewQuestionsComponent
      },
      {
        path:'create-question/:survey_id/:question_type',
        component:CreateQuestionsComponent
      },
      {
        path:'create-question/:survey_id',
        component:CreateQuestionsComponent
      },
      {
        path:'preview-question/:survey_id',
        component:PreviewQuestionsComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
