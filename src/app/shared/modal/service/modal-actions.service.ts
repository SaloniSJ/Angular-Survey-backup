import { Injectable } from '@angular/core';
import { MockServ1Service } from './mock-serv-1.service';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ModalActionsService {

    public question_type:string='';
    private quesTypeSource = new BehaviorSubject<string>('RADIO');
    quesType = this.quesTypeSource.asObservable()

  constructor(
    private serv1: MockServ1Service,

  ) { }

  // This function is the only way this service is directly called in the modal.
  // The modal passes to it the received `data` object and then this function\
  // calls the appropriate function based on the name of the modal. Then, that\
  // function receives whatever values it needs that were included in `data`
  modalAction(option,modalData: any) {
    switch (modalData.name) {
      case "logout":
        this.setData(option,modalData);
        break;
      
      case "deleteProduct":
        this.deleteProduct(modalData);
        break;
        
      default:
        this.setData(option,modalData);
        break;
    }
  }

  // While the following functions don't make sense in this demo, I've created\
  // them for the sake of mentioning scenearios where the values from data\
  // couldn't be passed directly to the other service calls
  
  private setData(option,modalData: any) {
    // Call an authentication service method to logout the user
    console.log(option)
    this.question_type=option;
    this.quesTypeSource.next(option);
    // return option;
    // this.serv1.alertLogout(option,modalData);
  }

  private deleteProduct(modalData: any) {
    // Call a service that makes a DELETE HTTP Request to the server for the\
    // given product id
    // this.serv1.alertLogout(modalData);
  }

  public getData(){
    return this.question_type;
  }
}
