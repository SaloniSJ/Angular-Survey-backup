import { Component, OnInit } from '@angular/core';

import { Option } from 'src/app/core/question/option';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-long-text',
  templateUrl:'./long-text.component.html' ,
  styles: [],
})
export class LongTextComponent implements OnInit {
  option: Option;
  group: FormGroup;
  constructor() {}

  ngOnInit(): void {}
}
