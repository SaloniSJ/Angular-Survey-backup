import {
  Component,
  OnInit,
  ViewEncapsulation,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';

import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Field, Validator } from '../../../core/question/option';
@Component({
  selector: 'dynamic-form',
  template: `
    <form class="dynamic-form" (submit)="onSubmit($event)">
      <ng-container

        dynamicField
        [field]="fields"
        [group]="form"
      >
      </ng-container>
    </form>
  `,
  styles: [],
})
export class DynamicFormComponent implements OnInit {
  
  @Input() fields : Field[]=[];

  @Output() submit : EventEmitter<any> = new EventEmitter<any>();

  form: FormGroup;
  
  constructor(
    private fb: FormBuilder
  ) {}
  
  ngOnInit(): void {
    // this.form = this.createControl();
  }


  // getValue() {
  //   return this.form.value;
  // }

  // bindValidations (validations: any) {
  //   if(validations.length>0){
  //     const validList = [];
  //     validations.forEach(valid => {
  //       validList.push(valid.Validator);
  //     })
  //     return Validators.compose(validList);
  //   }
  //   return null;
  // }

  // createControl(){

  //   const group = this.fb.group({});
  //   this.fields.forEach(field => {
  //     console.log(field)
  //    const control = this.fb.control(
  //      field.value,
  //      this.bindValidations(field.value || [])
  //    );
  //    group.addControl(field.name, control);
  //   });
  //   return group;
  // }

  onSubmit(event: Event) {
    // event.preventDefault();
    // event.stopPropagation();
    // if(this.form.valid){
    //   this.submit.emit(this.form.value);
    // }else {
    //   this.validateAllFormFields(this.form);
    // }
  }

  // validateAllFormFields(formGroup: FormGroup){
  //   Object.keys(formGroup.controls).forEach(field => {
  //     console.log(field)
  //     const control = formGroup.get(field);
  //     control.markAsTouched({ onlySelf: true});
  //   });
  // }

}