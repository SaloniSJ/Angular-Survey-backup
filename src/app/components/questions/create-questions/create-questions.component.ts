import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ModalActionsService } from 'src/app/shared/modal/service/modal-actions.service';
import { QuestionService } from 'src/services/question/question.service';
import { Questions } from '../../../core/question/questions';
import { ModalComponent } from '../../../shared/modal/modal.component';
import { DynamicFormComponent } from '../dynamic-form/dynamic-form.component';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { InteractionWithTopNavigationServiceService } from 'src/app/shared/service/interaction-with-top-navigation-service.service';

@Component({
  selector: 'app-create-questions',
  templateUrl: './create-questions.component.html',
  styleUrls: [
    './create-questions.component.css',
    './preview-create-questions.component.css',
  ],
  encapsulation: ViewEncapsulation.None,
})
export class CreateQuestionsComponent implements OnInit {
  public questionTypeList = [];

  public questionImageUrl: string | ArrayBuffer;

  public questionFile: File;

  public languages = ['English'];

  public rating_options = [
    'Star',
    'Smiley Face',
    'Square',
    'Like',
    'Dislike',
    'Circle',
  ];

  public questionJSON = new Questions();

  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;

  public question_list = [];

  public rating_icon: string = '';

  public preSignedUrl: string= '';

  public options: any[] = [
    {
      id: 1,
      option_value: '',
      option_image_url: '',
      option_image_file: File,
      other_option_available: false,
    },
  ];

  public question_option: any[] = [
    {
      optionText: '',
      optionType: '',
      optionStatus: '',
      otherOptionAvailable: true,
    },
  ];

  public disable_add_option_icon: Boolean = false;

  public question_type: string = '';

  public survey_id: string = '';

  public survey_name: string = '';

  public userId: string = '';

  public is_add_question_modal_visible: Boolean = true;

  public is_preview_question_modal_visible: Boolean = true;

  public total_pages: string = '';

  public page_size = 10;

  public page_number: string = '';

  public total_elements: string = '';

  public pageEvent: PageEvent;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    public questionService: QuestionService,
    private router: Router,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService,
    public matDialog: MatDialog,
    private toastr: ToastrService,
    private modalService: ModalActionsService,
    private interactionWithTopNavigation:InteractionWithTopNavigationServiceService
  ) {
  }

  fetchAllQuestion(payload) {
    this.spinner.show();
    console.log(payload);
    this.questionService.fetchQuestions(payload).subscribe(
      (response) => {
        console.log(response);
        if (response.status) {
          this.spinner.hide();
          console.log(response);
          this.is_add_question_modal_visible = false;
          this.is_preview_question_modal_visible = true;
          this.question_list = response.surveyQuestionResponseBeans;
          this.page_number = response.pageNumber;
          this.page_size = response.size;
          this.total_elements = response.totalElements;
          this.total_pages = response.totalPages;
        } else {
          this.spinner.hide();
          console.log('Error====>', response);
        }
      },
      (error) => {
        this.spinner.hide();
        console.log(error);
      }
    );
  }

  public changePageNumber(e?:PageEvent) {
    console.log(e);
    const payload = {
      surveyId: this.survey_id,
      userId: this.userId,
      languageCode: 'en',
      size: e.pageSize,
      page: e.pageIndex,
    };
    this.fetchAllQuestion(payload);
    return e;
  }

  addOptions() {
    this.options.push({
      id: this.options.length + 1,
      option_value: '',
      option_image_url: '',
      option_image_file: File,
      other_option_available: false,
    });
  }

  addOtherOption(i) {
    this.options[i].other_option_available = true;
  }

  removeOtherOption(i) {
    this.options[i].other_option_available = false;
  }

  removeOption(i) {
    this.options.splice(i, 1);
  }

  ngOnInit(): void {
    const id=this.route.snapshot.paramMap.get('survey_id')
    this.survey_id=id;
    this.userId = localStorage.getItem('userId');
    console.log(this.userId);
    this.interactionWithTopNavigation.sendSurveyData(id);
    const payload = {
      surveyId: id,
      userId: localStorage.getItem('userId'),
      languageCode: 'en',
      size: this.page_size,
      page: 0,
    };
    this.fetchAllQuestion(payload);
    this.fetchAllQuestionTypes();
   // this.fetchPreSignedUrl();
  }

  editQuestion(survey_data){
    console.log(survey_data);
    //data is not getting loaded in form
    const payload = {
      surveyId: this.survey_id,
      userId: this.userId,
      questionType: survey_data.questionType,
      isMandatory: survey_data.isMandatory,
      isHavingMultimedia: survey_data.isHavingMultimedia,
      isRandomized: survey_data.isRandomized,
      isHorizontal: survey_data.isHorizontal,
      languageCode: survey_data.langaugeCode,
      orderNumber: survey_data.orderNumber,
      pageNumber: survey_data.pageNumber,
      questionStatus: survey_data.questionStatus,
      questionText: survey_data.questionText,
      options: survey_data.surveyOptionResponseBeans,
      threshold: survey_data.threshold,
      icon: survey_data.icon,
    };
    this.is_add_question_modal_visible=true,
    this.is_preview_question_modal_visible=false,
    console.log("Edit question payload==>",payload)
  }

  handleOptionCss(option_css) {
    if (option_css == 'Horizontal') {
      console.log('is_horizontal');
      this.questionJSON.isVertical = false;
    }
    if (option_css == 'Vertical') {
      console.log('is_vertical');
      this.questionJSON.isHorizontal = false;
    }
  }

  fetchPreSignedUrl(){
    this.questionService.fetchPreSignedUrl().subscribe(response=>{
      console.log(response)
      if(response.status){
        this.preSignedUrl=response.presignedUrl;
      }else{
        this.toastr.error('There is problem with uploading image....')
      }
    },error=>{
      console.log(error);
    })
  }


  increaseThresholdValue = () => {
    this.questionJSON.threshold++;
  };

  decreaseThresholdValue = () => {
    this.questionJSON.threshold--;
  };

  fetchAllQuestionTypes() {
    this.questionService.fetchAllQuestionType().subscribe((response) => {
      console.log(response);
      const OpenEnded = response.questionTypes[0].questionTypeList;
      const CloseEnded = response.questionTypes[1].questionTypeList;
      const Banner = response.questionTypes[2].questionTypeList;
      const Multimedia = response.questionTypes[3].questionTypeList;
      this.questionTypeList = [
        ...OpenEnded,
        ...CloseEnded,
        ...Banner,
        ...Multimedia,
      ];
      console.log(this.questionTypeList);
    });
  }

  // Question image
  showQuestionImagePreview(questionFile: File) {
    console.log(questionFile);
    if (questionFile) {
      // this.fileName = file.name;
      // this.file = file;
      this.questionFile = questionFile;
      const reader = new FileReader();
      reader.readAsDataURL(questionFile);

      reader.onload = (event) => {
        this.questionJSON.isHavingMultimedia = true;
        this.questionImageUrl = reader.result;
      };
      this.questionJSON.isHavingMultimedia = true;
    }
  }

  uploadQuestionImage(data) {
    console.log(data);
    let formData = new FormData();
    const payload = {
      surveyId: this.survey_id,
      questionId: data.questionId,
      multimediaType: 'IMAGE',
      langaugeCode: 'en',
    };
    formData.append('payload', JSON.stringify(payload));
    formData.append('file', this.questionFile);
    this.questionService.uploadQuestionMultimedia(formData).subscribe(
      (response) => {
        console.log(response);
        if (response.status) {
          this.question_list = response.surveyQuestionResponseBeans;
          this.is_add_question_modal_visible = false;
        }
      },
      (error) => {
        this.spinner.hide();
        console.log(error);
      }
    );
  }

  // option image
  showOptionImagePreview(index, optionFile: File) {
    console.log(index, optionFile);
    if (optionFile) {
      // this.file = file;
      this.options[index].option_image_file = optionFile;

      const reader = new FileReader();
      reader.readAsDataURL(optionFile);

      reader.onload = (event) => {
        this.options[index].option_image_url = reader.result;
      };
    }
  }

  onSubmit() {
    this.spinner.show();
    console.log('Question JSON == ', this.questionJSON);
    console.log('Options Array == ', this.options);
    this.options.map((option) => {
      this.question_option.push({
        optionText: option.option_value,
        optionType: this.question_type,
        optionStatus: 'ACTIVE',
        otherOptionAvailable: option.other_option_available,
      });
    });
    this.question_option.splice(0, 1);
    this.questionJSON.options = this.question_option;

    console.log('payload===>', this.questionJSON);
    if (this.question_type == 'RATING' || this.question_type == 'RANKING') {
      this.questionJSON.icon = 'star';
    }
    const payload = {
      surveyId: this.survey_id,
      userId: this.userId,
      questionType: this.question_type,
      isMandatory: this.questionJSON.isMandatory,
      isHavingMultimedia: this.questionJSON.isHavingMultimedia,
      isRandomized: this.questionJSON.isRandomized,
      isHorizontal: this.questionJSON.isHorizontal,
      languageCode: 'en',
      orderNumber: 1,
      pageNumber: 1,
      questionStatus: 'ACTIVE',
      questionText: this.questionJSON.questionText,
      options: this.question_option,
      threshold: this.questionJSON.threshold,
      icon: this.questionJSON.icon,
    };

    console.log(payload);

    // this.questionService.createQuestion(payload).subscribe(
    //   (response) => {
    //     console.log(response);
    //     if (response.status) {
    //       this.toastr.success('Question Created Successfully!');
    //       this.is_preview_question_modal_visible = true;
    //       this.spinner.hide();

    //       this.question_list = response.surveyQuestionResponseBeans;
    //       this.page_number = response.pageNumber;
    //       // this.page_size = response.size;
    //       this.page_size=10
    //       this.total_elements = response.totalElements;
    //       this.total_pages = response.totalPages;
    //       this.is_add_question_modal_visible = false;

    //       this.questionJSON.questionType = '';
    //       this.questionJSON.isMandatory = true;
    //       this.questionJSON.isHavingMultimedia = false;
    //       this.questionJSON.isRandomized = true;
    //       this.questionJSON.isHorizontal = true;
    //       this.questionJSON.isVertical = false;
    //       this.questionJSON.languageCode = 'en';
    //       this.questionJSON.orderNumber = '';
    //       this.questionJSON.pageNumber = '1';
    //       this.questionJSON.questionStatus = '';
    //       this.questionJSON.questionText = '';
    //       this.questionJSON.options = [];
    //       this.questionJSON.threshold = 0;
    //       this.questionJSON.icon = '';
    //       // this.router.navigate(['survey/preview-question', this.survey_id]);
    //     } else {
    //       this.spinner.hide();
    //       this.questionJSON.questionType = '';
    //       this.questionJSON.isMandatory = true;
    //       this.questionJSON.isHavingMultimedia = false;
    //       this.questionJSON.isRandomized = true;
    //       this.questionJSON.isHorizontal = true;
    //       this.questionJSON.isVertical = false;
    //       this.questionJSON.languageCode = 'en';
    //       this.questionJSON.orderNumber = '';
    //       this.questionJSON.pageNumber = '1';
    //       this.questionJSON.questionStatus = '';
    //       this.questionJSON.questionText = '';
    //       this.questionJSON.options = [];
    //       this.questionJSON.threshold = 0;
    //       this.questionJSON.icon = '';
    //       this.toastr.error('Message : ', response.message);
    //     }
    //   },
    //   (error) => {
    //     this.spinner.hide();
    //     console.log(error);
    //   }
    // );
  }

  deleteQuestion(question_id, language_code) {
    this.spinner.show();
    const data = {
      surveyId: this.survey_id,
      questionId: question_id,
      languageCode: language_code,
      userId: this.userId,
    };
    this.questionService.deleteQuestion(data).subscribe(
      (response) => {
        if (response.status) {
          this.spinner.hide();
          this.is_preview_question_modal_visible = true;
          this.is_add_question_modal_visible = false;
          this.toastr.success('Question deleted!!');
          this.question_list = response.surveyQuestionResponseBeans;
        } else {
          this.spinner.hide();
          this.toastr.error(response.message);
        }
      },
      (error) => {
        this.spinner.hide();
        console.log(error);
      }
    );
  }

  openImageModalWindow(image_url){
    const dialogRef = this.matDialog.open(ModalComponent, {
      width: '1000px',
      data: {image_url,image:true},
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
    });
  }

  openModalWindow() {
    this.options = [
      {
        id: 1,
        option_value: '',
        option_image_url: '',
        option_image_file: File,
        other_option_available: false,
      },
    ];

    this.question_option = [
      {
        id: 1,
        option_value: '',
        option_image_url: '',
        option_image_file: File,
        other_option_available: false,
      },
    ];
    const dialogRef = this.matDialog.open(ModalComponent, {
      width: '1000px',
      data: {image:false,questionTypeList:this.questionTypeList},
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.is_add_question_modal_visible = true;
      console.log('The dialog was closed', result);
      this.question_type = result;
      this.is_preview_question_modal_visible = false;
    });
  }
}
