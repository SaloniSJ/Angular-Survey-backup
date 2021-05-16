import { Component, OnInit } from '@angular/core';

import { Option } from '../../../core/question/option';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-group-number',
  templateUrl:'./group-number.component.html',
  styles: [],
})
export class GroupNumberComponent implements OnInit {
  option: Option;
  group: FormGroup;

  constructor() {}

  ngOnInit(): void {}
}
