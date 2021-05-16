import { Component, OnInit } from '@angular/core';

import { FormGroup } from '@angular/forms';
import { Option } from '../../../core/question/option';

@Component({
  selector: 'app-dropdown',
  templateUrl:'./dropdown.component.html' ,
  styles: [],
})
export class DropdownComponent implements OnInit {
  option: Option;
  group: FormGroup;

  constructor() {}

  ngOnInit(): void {
    console.log("dropdown",this.option)
  }
}
