import { Component, OnInit } from '@angular/core';
import { Option } from '../../../core/question/option';
import { FormGroup } from '@angular/forms';
import { datepickerAnimation } from 'ngx-bootstrap/datepicker/datepicker-animations';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styles: [],
})
export class DateComponent implements OnInit {
  option: Option;
  group: FormGroup;
  constructor() {}

  ngOnInit(): void {
    console.log("Here I am ==>", this.option)
  }
}
