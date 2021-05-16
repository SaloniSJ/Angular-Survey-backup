import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms'
import { Router } from '@angular/router';
import { SurveyService } from '../../../../services/survey/survey.service';
import { Survey } from './../../../core/survey/survey';
import Message from 'src/app/utils/message';
import { ViewEncapsulation } from '@angular/core'
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-create-survey',
  templateUrl: './create-survey.component.html',
  styleUrls: ['./create-survey.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CreateSurveyComponent implements OnInit {

  errorMsg: string = '';
  birthDate: string = '';
  imageUrl: string | ArrayBuffer;
  file: File;
  box1: boolean = false;
  box2: boolean = false;
  survey = new Survey();
  message = new Message();
  userId: string = '';
  surveyHasImage:boolean=false;
  minDate: Date;

  constructor(
    public surveyService: SurveyService,
    private router: Router,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) { 
    this.minDate = new Date();
  }

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId')
  }

  uploadImage(data_to_be_forwarded) {
    console.log("Upload File===>",this.file,data_to_be_forwarded)
    const data = data_to_be_forwarded;
   
      let formData=new FormData();
      formData.append('surveyId',data.survey_details.surveyId)
      formData.append('file',this.file);
    this.surveyService.uploadSurveyImage(formData).subscribe(response => {
      const data_to_be_forwarded = {
        survey_id: data,
        user_id: this.userId
      }
      if (response.status) {
        this.spinner.hide();
        this.toastr.success('Survey Created Successfully!!.')
        this.surveyHasImage=false;
        this.router.navigateByUrl('survey/view-question', { state: { data: data_to_be_forwarded } })
      } else {
        this.spinner.hide();
        console.log(response)
        this.toastr.error(response.message)
        this.errorMsg = response.message;
        this.router.navigateByUrl('/survey/create-survey')
      }
    }, error => {
      this.errorMsg = this.message.error
      this.spinner.hide();
    })
  }

  changeSurveyStatus(status){
    if(status == 'Active'){
      console.log('active')
      this.survey.isSurveyActive=true;
      this.survey.isSurveyDeactive=false;
    }if(status=='Deactive'){
      console.log('deactive')
      this.survey.isSurveyDeactive=true;
      this.survey.isSurveyActive=false
    }
  }

  showPreview(file: File) {
    console.log(file)
    if (file) {
      // this.fileName = file.name;
      this.file = file;

      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = event => {
        this.surveyHasImage=true;
        this.imageUrl = reader.result;
      };
    }
  }

  getDateOfBirthFormat(date) {
    var MyDateString;
    MyDateString = ('0' + date.getDate()).slice(-2) + '-'
      + ('0' + (date.getMonth() + 1)).slice(-2) + '-'
      + date.getFullYear();

    console.log(MyDateString)
    return MyDateString;
  }

  createSurvey() {
    this.spinner.show();
    const data = {
      'userId': this.userId,
      'surveyName': this.survey.survey_name,
      'surveyDescription': 'Test',
      'languageCode': "en",
      "surveyStatus" : 'ACTIVATED',
      'surveyGeolocationMandatory': this.survey.gps_location_mandatory,
      'surveyNetworktimeMandatory': this.survey.network_time_mandatory,
      'surveyStartDate': this.getDateOfBirthFormat(this.survey.survey_create_date),
      'surveyExpireDate': this.getDateOfBirthFormat(this.survey.survey_end_date)
    }
    console.log(data)

    this.surveyService.createSurvey(data).subscribe(response => {
      console.log("Response==>", response)
      const data_to_be_forwarded = {
        survey_details: response.surveyDetail,
        user_id: this.userId
      }
      if (response.status) {
        if(this.surveyHasImage){
          this.uploadImage(data_to_be_forwarded);
        }else{
          this.spinner.hide();
          this.toastr.success('Survey Created Successfully!!.')
          this.router.navigateByUrl('survey/view-question',{state:{data:data_to_be_forwarded}})
        }        
      } else {
        this.spinner.hide();
        this.toastr.error(response.message)
        console.log(response)
        this.errorMsg = response.message;
      }
    }, error => {
      this.errorMsg = this.message.error
      this.spinner.hide();
    })
  }
}

