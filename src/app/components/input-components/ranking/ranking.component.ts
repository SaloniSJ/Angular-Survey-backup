import { Component, OnInit } from '@angular/core';

import { Option } from '../../../core/question/option';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ranking',
  templateUrl:'./ranking.component.html',
  styles: [],
})
export class RankingComponent implements OnInit {
  option: Option;
  group: FormGroup;
  constructor() {}

  ngOnInit(): void {}
}
