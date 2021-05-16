import { Component, OnInit } from '@angular/core';

import { Option } from '../../../core/question/option';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-textarea',
  template: `
    <div class="heightautos">
      <textarea
        rows="3"
        cols="10"
        placeholder="max 100"
        class="textarea"
        [value]="option.optionText"
      ></textarea>
    </div>
  `,
  styles: [],
})
export class TextareaComponent implements OnInit {
  option: Option;
  group: FormGroup;

  constructor() {}

  ngOnInit(): void {}
}
