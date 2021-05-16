import { Component, OnInit } from '@angular/core';

import { Option } from '../../../core/question/option';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-plain-banner',
  templateUrl: './plain-banner.component.html',
  styles: [],
})
export class PlainBannerComponent implements OnInit {
  option: Option;
  group: FormGroup;

  constructor() {}

  ngOnInit(): void {}
}
