import { Component, OnInit } from '@angular/core';

import { FormGroup } from '@angular/forms';
import { Option } from '../../../core/question/option';

@Component({
  selector: 'app-boolean',
  templateUrl:'./boolean.component.html' ,
  styles: [],
})
export class BooleanComponent implements OnInit {
  option: Option;
  group: FormGroup;
  constructor() {}

  ngOnInit(): void {}
}
