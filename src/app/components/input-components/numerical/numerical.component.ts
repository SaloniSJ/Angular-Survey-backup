import { Component, OnInit } from '@angular/core';

import { FormGroup } from '@angular/forms';
import { Option } from '../../../core/question/option';

@Component({
  selector: 'app-numerical',
  templateUrl:'./numerical.component.html' ,
  styles: [],
})
export class NumericalComponent implements OnInit {
  option: Option;
  group: FormGroup;

  constructor() {}

  ngOnInit(): void {}
}
