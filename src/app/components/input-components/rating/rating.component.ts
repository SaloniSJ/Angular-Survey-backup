import { Component, OnInit } from '@angular/core';

import { Option } from '../../../core/question/option';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-rating',
  templateUrl:'./rating.component.html' ,
  styles: [``],
})
export class RatingComponent implements OnInit {
  option: Option;
  group: FormGroup;

  constructor() {}

  ngOnInit(): void {}
}
