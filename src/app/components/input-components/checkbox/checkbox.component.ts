import { Component, OnInit } from '@angular/core';

import { FormGroup } from '@angular/forms';
import { Option } from '../../../core/question/option';

@Component({
  selector: 'app-checkbox',
  templateUrl:'./checkbox.component.html',
  styles: [],
})
export class CheckboxComponent implements OnInit {
  option: Option;
  group: FormGroup;
  constructor() {}

  ngOnInit(): void {
    console.log("Checkbox",this.option)
  }
}
