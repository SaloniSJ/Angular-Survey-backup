import { Component, OnInit } from '@angular/core';

import { FormGroup } from '@angular/forms';
import { Option } from '../../../core/question/option';

@Component({
  selector: 'app-chip-distribution',
  templateUrl: './chip-distribution.component.html',
  styles: [],
})
export class ChipDistributionComponent implements OnInit {
  option: Option;
  group: FormGroup;

  constructor() {}

  ngOnInit(): void {}
}
