import { Component, OnInit } from '@angular/core';
import { Option } from '../../../core/question/option';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-short-text',
  template: `
    <div class="heightautos">
      <textarea
        rows="3"
        cols="10"
        [value]="option.optionText"
        placeholder="max 100"
        class="textarea"
      ></textarea>
    </div>
  `,
  styles: [],
})
export class ShortTextComponent implements OnInit {
  option: Option;
  group: FormGroup;

  constructor() {}

  ngOnInit(): void {}
}
