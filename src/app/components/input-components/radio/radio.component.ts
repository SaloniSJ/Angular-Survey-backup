import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Option } from '../../../core/question/option';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-radio',
  templateUrl:'./radio.component.html' ,
  styles: [],
})
export class RadioComponent implements OnInit {
  option: Option;
  group: FormGroup;

  constructor() {}

  ngOnInit(): void {
    console.log("Hey I am Radio :: ", this.option)
  }
}
