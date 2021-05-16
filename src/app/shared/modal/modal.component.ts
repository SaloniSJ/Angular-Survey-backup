import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalActionsService } from './service/modal-actions.service';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ModalComponent implements OnInit {


  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      console.log('Modal Data==>',data)
    }

  // constructor(
  //   public dialogRef: MatDialogRef<ModalComponent>,
  //   @Inject(MAT_DIALOG_DATA) public modalData: any,
  //   public modalService: ModalActionsService
  // ) {
  //   console.log(modalData);
  // }

  ngOnInit() { }

  // When the user clicks the action button, the modal calls the service\
  // responsible for executing the action for this modal (depending on\
  // the name passed to `modalData`). After that, it closes the modal
  actionFunction() {
    // this.modalService.modalAction(this.modalData);
    // this.closeModal();
  }

  goToCreateQuestion(option){
    console.log(option)
    //this.modalService.modalAction(option, this.modalData)
    
    this.closeModal();
  }

  // If the user clicks the cancel button a.k.a. the go back button, then\
  // just close the modal
  closeModal() {
    this.dialogRef.close();
  }

}