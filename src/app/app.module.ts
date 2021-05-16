import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ModalDialogModule } from 'ngx-modal-dialog';
import { NgxSpinnerModule } from "ngx-spinner";
import { ToastrModule } from 'ngx-toastr';
import { SurveyService } from '../services/survey/survey.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BooleanComponent } from './components/input-components/boolean/boolean.component';
import { CheckboxComponent } from './components/input-components/checkbox/checkbox.component';
import { ChipDistributionComponent } from './components/input-components/chip-distribution/chip-distribution.component';
import { DateComponent } from './components/input-components/date/date.component';
import { DropdownComponent } from './components/input-components/dropdown/dropdown.component';
import { DynamicFieldDirective } from './components/input-components/dynamic-field/dynamic-field.directive';
import { FreeTextComponent } from './components/input-components/free-text/free-text.component';
import { GroupNumberComponent } from './components/input-components/group-number/group-number.component';
import { LongTextComponent } from './components/input-components/long-text/long-text.component';
import { NumericalComponent } from './components/input-components/numerical/numerical.component';
import { PlainBannerComponent } from './components/input-components/plain-banner/plain-banner.component';
import { RadioComponent } from './components/input-components/radio/radio.component';
import { RankingComponent } from './components/input-components/ranking/ranking.component';
import { RatingComponent } from './components/input-components/rating/rating.component';
import { ShortTextComponent } from './components/input-components/short-text/short-text.component';
import { TextareaComponent } from './components/input-components/textarea/textarea.component';
import { CreateQuestionsComponent } from './components/questions/create-questions/create-questions.component';
import { DynamicFormComponent } from './components/questions/dynamic-form/dynamic-form.component';
import { PreviewQuestionsComponent } from './components/questions/preview-questions/preview-questions.component';
//Component-imports
import { CreateSurveyComponent } from './components/survey/create-survey/create-survey.component';
import { ViewSurveyComponent } from './components/survey/view-survey/view-survey.component';
import { MaterialModule } from './material.module';
// import { TokenInterceptor } from './auth/token.interceptor';
//Module-imports
import { ServeMonstaAuthenticationRoutingModule } from './serve-monsta-authentication/serve-monsta-authentication-routing.module';
import { ServeMonstaAuthenticationModule } from './serve-monsta-authentication/serve-monsta-authentication.module';
//Services-imports
import { UserLoginService } from './serve-monsta-authentication/services/user-login/user-login.service';
import { UserSignupService } from './serve-monsta-authentication/services/user-signup/user-signup.service';
import { ModalComponent } from './shared/modal/modal.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SideNavigationComponent } from './shared/side-navigation/side-navigation.component';
import { ModalActionsService } from './shared/modal/service/modal-actions.service';


import { NgxSliderModule } from "@angular-slider/ngx-slider";

@NgModule({
  declarations: [
    RadioComponent,
    CheckboxComponent,
    DateComponent,
    TextareaComponent,
    RankingComponent,
    RatingComponent,
    BooleanComponent,
    ChipDistributionComponent,
    NumericalComponent,
    GroupNumberComponent,
    PlainBannerComponent,
    FreeTextComponent,
    DropdownComponent,
    LongTextComponent,
    ShortTextComponent,

    AppComponent,
    CreateSurveyComponent,
    ViewSurveyComponent,
    CreateQuestionsComponent,
    PreviewQuestionsComponent,
    NavbarComponent,
    SideNavigationComponent,
    DashboardComponent,
    DynamicFieldDirective,
    DynamicFormComponent,
    ModalComponent,
   
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    ServeMonstaAuthenticationModule,
    ServeMonstaAuthenticationRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    BsDatepickerModule.forRoot(),
    ModalDialogModule.forRoot(),
    ToastrModule.forRoot({
      positionClass: 'toast-top-center',
    }),
    MaterialModule,
    MatSliderModule,
    NgxSpinnerModule,
    MatPaginatorModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    NgbModule,
    NgxSliderModule
  ],

  entryComponents: [
    RadioComponent,
    CheckboxComponent,
    DateComponent,
    TextareaComponent,
    RankingComponent,
    RatingComponent,
    BooleanComponent,
    ChipDistributionComponent,
    NumericalComponent,
    GroupNumberComponent,
    PlainBannerComponent,
    FreeTextComponent,
    DropdownComponent,
    LongTextComponent,
    ShortTextComponent,
    MatDialogModule,
    MatSliderModule
  ],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: TokenInterceptor,
    //   multi: true
    // },
    UserLoginService,
    UserSignupService,
    SurveyService,
    ModalActionsService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
